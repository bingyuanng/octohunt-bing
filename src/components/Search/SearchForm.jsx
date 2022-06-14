import React from 'react'
import { Form, Input, Button } from 'antd'

export default function SearchForm(props) {
  const {form, handleSubmit} = props
  
  return (
    <Form form={form} onFinish={handleSubmit} >
      <Form.Item name="language" label="Language"  rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="location" label="Location"  rules={[{ required: true }]} >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}