import React, {useState} from "react";
import { Form, Spin } from 'antd';
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import GithubService from "../../api/github";

export default function Index() {
  const [form] = Form.useForm();

  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState()
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    const { language, location } = form.getFieldsValue()
    
    setLoading(true)
    GithubService.getUsersByLanguageAndLocation(language, location).then(
      response => response.json()
    ).then(
      data => {
          setUsers(data.items)
          setLoading(false)
      }
    ).catch(
      err=> setErrors(err)
    )
  }
  return (
    <div>
      <h1>Octohunt</h1>
      <SearchForm form={form} handleSubmit={handleSubmit} />
      <div>
        {errors && <pre>{JSON.stringify(errors)}</pre>}
        {loading ? <Spin>loading</Spin> :<SearchResult users={users} />}
      </div>
    </div>
  )
}


//  https://api.github.com/search/users\?q\=type:user+language:%22elixir%22+location:%22malaysia%22\&page\=1