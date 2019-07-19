import React, {Component, Fragment} from 'react';
import globalContext from '../../context/index';
// import loginService from '../../services/login.service';
import axios from 'axios';
// import './style.scss';
import {
    Form, Icon, Input, Button, Checkbox 
} from 'antd';

import ExcelUpload from "../excelUpload/index";

class Login extends Component {

    static contextType = globalContext;

    constructor(props){
        super(props);
        this.state = {
            email:'abhishek@gmail.com',
            name:"abhishek",
            userAuthenicate:false,
            user:null
        }
    }

    componentDidMount(){

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
            axios.post('user/login',values)
            .then(resp=>{
               
              if(resp.data){
                // user authenicated
                console.log(resp);

               this.setState({
                 userAuthenticate:true,
                 user:resp.data
               });

              //  localStorage.setItem('{})
            }
            else{
                alert("User Not registered");
            }

            });

          //   loginService.login(values).then(resp=>{
          //     if(resp.status===200){
          //         // user authenicated
          //         this.context.update({userAuthenicate:true});
          //     }
          //     else{
          //         alert("User Not registered");
          //     }
          // });
          }
        });
      };

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Fragment>
              {this.state.userAuthenticate ?
                <ExcelUpload user = {this.state.user}/>
              :
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
              }
          </Fragment>
        );
    }

}

export default  Form.create()(Login);