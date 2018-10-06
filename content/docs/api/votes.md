<h3 id="votes">Votes</h3>

<ul>
  <li><a href="#add-vote">Vote on a Post</a></li>
  <li><a href="#remove-vote">Remove Vote from on a Post</a></li>
</ul>

<h4 id="add-vote">Vote on a Post</h4>

- <strong>Authentication:</strong> Required
- <strong>Required Role:</strong> Any Role

When casting a vote upon a post, the vote is registered under the current authenticated user. Impersonate another user to vote on behalf of them.

```
POST /api/v1/posts/{number}/votes
```

<strong>Parameters</strong>

<table>
  <tr>
    <th width="140">Name</th>
    <th width="90">Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>number</code></td>
    <td><code>number</code></td>
    <td><strong>Required.</strong> The number of the post to vote on.</td>
  </tr>
</table>

<strong>Example</strong>

```
POST <baseURL>/api/v1/posts/47/votes
```

<strong>Response</strong>

```
200 OK
---
{}
```

<h4 id="remove-vote">Remove Vote from on a Post</h4>

- <strong>Authentication:</strong> Required
- <strong>Required Role:</strong> Any Role

When removing the vote from a post, the vote is removed from the current authenticated user. Impersonate another user to remove votes on behalf of them.

```
DELETE /api/v1/posts/{number}/votes
```

<strong>Parameters</strong>

<table>
  <tr>
    <th width="140">Name</th>
    <th width="90">Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>number</code></td>
    <td><code>number</code></td>
    <td><strong>Required.</strong> The number of the post to have the vote removed.</td>
  </tr>
</table>

<strong>Example</strong>

```
DELETE <baseURL>/api/v1/posts/47/votes
```

<strong>Response</strong>

```
200 OK
---
{}
```