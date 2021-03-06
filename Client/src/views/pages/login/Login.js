import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import qs from 'qs'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
//import callAPI from '../../../callAPI/callAPI'
import LoginAPI from '../../../callAPI/Authentication.api'
const Login = () => {
  const [name,setname]=useState("");
  const [pass,setPass]=useState("");
  const [err,setErr]=useState("");
  const [isRedirect,setisRedirect]=useState(false);
  const up_Name = (e) =>
  {
    setname(e.target.value)
  }
  const up_Pass = (e) =>
  {
    setPass(e.target.value)
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const On_login = () =>{
    LoginAPI(qs.stringify({
      username:name,
      password:pass
     })
    ).then(res =>{
      if(res.data && res.data.accessToken && res.data.login==="success")
      {
       localStorage.setItem("token",res.data.accessToken);
       localStorage.setItem("RefreshToken",res.data.refreshToken);
       console.log(localStorage.getItem("token"))
       setisRedirect(true);
       return;
      }
        setErr(res.data.err)
     })
  }

  return   isRedirect?<Redirect to='/' />:
  (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    { err !== "" ?
                      <div className={useStyles.root}>
                        <Alert severity="error">{err} - check it out</Alert>
                      </div>:""
                    }
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Name} type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={up_Pass} type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={On_login} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Phong Phu International</h2>
                    <p>We are also interested in venturing with foreign manufacturers in term of technology know-how and marketing alliance
                     to take advantage of Vietnam recent emerging as new textile sourcing center in Asia.</p>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
