import React, {useState} from "react";
import { Form, Input, Button } from 'antd';

export default function Search() {
    const [form] = Form.useForm();

    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState()
    const [loading, setLoading] = useState(true)

    const handleSubmit = () => {
        const { language, location } = form.getFieldsValue()
        const query =  encodeURIComponent(`type:user language:${language} location:${location}`);
        setLoading(true)
        
        fetch(`https://api.github.com/search/users\?q\=${query}`).then(
          response => response.json()
        ).then(
            data => {
                setUsers(data.items)
                setLoading(false)
            }
        ).catch(
            err=> {setErrors(err)}
        )
    }
    return <div>
       <h1>Octohunt</h1>

       <Form form={form} onFinish={handleSubmit} >
        <Form.Item name="language" label="Language"  rules={[
          {
            required: true,
          },
        ]}>
            <Input />
        </Form.Item>
      <Form.Item name="location" label="Location"  rules={[
          {
            required: true,
          },
        ]} >
          <Input />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <div>
          {(users || []).map(user => {
              return <div key={user.id}>{user.login}</div>
          })}
      </div>
    </Form>

    </div>
}


//  https://api.github.com/search/users\?q\=type:user+language:%22elixir%22+location:%22malaysia%22\&page\=1