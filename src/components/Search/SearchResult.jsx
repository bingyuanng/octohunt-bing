import React from 'react';

export default function SearchResult(props) {
    const {users} = props
    return <div>
         {(users || []).map(user => {
              return <SearchResultItem key={user.id} user={user} />
          })}
    </div>
}

function SearchResultItem(props) {
    const {user} = props
    return <div>{user.login}</div>
}