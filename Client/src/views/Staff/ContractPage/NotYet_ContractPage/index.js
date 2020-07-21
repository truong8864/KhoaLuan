import React, { useState, useEffect } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCol,
  CDataTable
} from '@coreui/react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Notyet_ContractApi } from '../../../../callAPI/Hre_Profile.api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

const fields = [
  { key: 'CodeEmp', _style: { width: '20%'} },
  { key: 'ProfileName', _style: { width: '40%'} },
  { key: 'Gender', _style: { width: '20%'} },
  { key: 'DateHire', _style: { width: '20%'} },
  { key: 'PAddress', _style: { width: '20%'} },
 /* {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }*/
]
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


const NotYet_ContractPage = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [code,setCode]=useState("");
  const [staff,setStaff]=useState([]);

  useEffect(()=>{
    Notyet_ContractApi().then(res=>{
      if(res.data && res.data.result)
      {
        setStaff(res.data.result)
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
  return (
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
            </form>
            <CDataTable
              items={filter2}
              fields={fields}
              hover

              striped
              bordered
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
  )
}
export default NotYet_ContractPage
