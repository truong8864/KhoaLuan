import React, { useState, useEffect } from 'react'
import { Redirect,useHistory} from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable
} from '@coreui/react'
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles,createMuiTheme,ThemeProvider  } from '@material-ui/core/styles';
import {LinearProgress} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Notyet_ContractApi } from '../../../../callAPI/Hre_Profile.api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
  button: {
    margin: theme.spacing(1)
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const fields = [
  { key: 'CodeEmp', _style: { width: '10%'} },
  { key: 'ProfileName', _style: { width: '25%'} },
  { key: 'Gender', _style: { width: '10%'} },
  { key: 'DateHire', _style: { width: '25%'} },
  { key: 'PAddress', _style: { width: '40%'} },
 /* {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }*/
]
const getBadge = Gender => {
  switch (Gender) {
    case 'E_FEMALE': return 'Nữ'
    default: return 'Nam'
  }
}

const NotYet_ContractPage = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [staff,setStaff]=useState([]);
  const [load,setLoad]=useState(false);

  const [isRedirec,setIsRedirec]=useState(false);
  const history = useHistory()

  useEffect(()=>{
    Notyet_ContractApi().then(res=>{
      if(res.data && res.data.result)
      {
        setStaff(res.data.result)
        setLoad(true)
      }
    })
  },[])

  const up_Name = (e) =>{
    setName(e.target.value);
  }
  const up_CodeEmp = (e) =>{
    setCode(e.target.value);
  }
  let filter = staff.filter(
    (contact)=>{
      return contact.ProfileName.toLowerCase().indexOf(name.trim().toLowerCase()) !== -1;
    }
  );

let filter2 = filter.filter(
(contact)=>{
  return contact.CodeEmp.toLowerCase().indexOf(code.trim().toLowerCase()) !== -1;
}
);
  return  isRedirec?<Redirect to='/nhan-su/hop-dong/tao-moi-hop-dong' />:(
    <CCol>
          <CCard>
            <CCardBody> <b>DANH SÁCH NHÂN VIÊN CHƯA CÓ HỢP ĐỒNG</b>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  label="Tên nhân viên"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={up_Name} type="search"
                />
                <TextField
                  label="Mã nhân viên"
                  id="outlined-size-normal"
                  variant="outlined"
                  size="small"
                  onChange={up_CodeEmp} type="search"
                />

                <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={()=>setIsRedirec(true)}
                  startIcon={<CloudUploadIcon />}
                >
                  Tạo mới
                </Button>
              </ThemeProvider>
            </form>
{ load===false?<LinearProgress />:(
            <CDataTable
              items={filter2}
              fields={fields}
              hover
              size='sm'
              striped
              bordered
              itemsPerPage={15}
              pagination
              onRowClick={(item) => history.push(`/nhan-su/hop-dong/tao-moi-hop-dong/${item.CodeEmp}`)}
              clickableRows
              scopedSlots = {{
                'Gender':
                  (item)=>(
                    <td>
                      {getBadge(item.Gender)}
                    </td>
                  )
              }
            }
            />
)}
            </CCardBody>
          </CCard>
        </CCol>
  )
}
export default NotYet_ContractPage
