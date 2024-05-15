import { rest } from 'msw';

export const handlers = [
  rest.post('/user', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      // Respond with a 200 status code
      ctx.status(201),
    )
  }),

  rest.post('/login', (req, res, ctx) => {
    // Generate authentication token

    // Set token expiration time to 60 minutes
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 60);

    // Persist token and expiration time in the session
    sessionStorage.setItem('token_expiration', expirationTime.getTime().toString());

    return res(
      // Respond with a 201 status code
      ctx.status(201),
      // Include the token in the response body
      ctx.json({
        "user": {
          "user_id": "6850e3be-ff6a-4706-9157-d2bab23ff47d",
          "name": "リアクト太郎",
          "email": "react.tarou@example.com",
          "password": "$2y$10$t3YXwx0AEPLFKZTqV/Xs3eBvnVOgR/oatY6JjTpRMzN9eJlzFAxgO",
          "created_at": "2022-03-29T01:45:22.000000Z",
          "updated_at": "2022-03-29T01:45:22.000000Z",
          "deleted_at": null,
          "representative_image": "https://laravel-study-shinoda.s3.ap-northeast-1.amazonaws.com/user/6850e3be-ff6a-4706-9157-d2bab23ff47d",
          "token": "4|tPK6mcUklKR26ngBcRwdPEhVwGn5vJrY9B5gNSir"
        }
      })
    );
  }),

  rest.get('/user/:user_id', (req, res, ctx) => {
    // ユーザーが認証されているかどうかを確認する
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // 認証されていない場合、403エラーで応答する
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // 認証された場合、模擬ユーザの情報を返す
    return res(
      ctx.status(200),
      ctx.json({
        "name": "リアクト太郎",
        "email": "react.tarou@example.com",
        "representative_image": "https://snasdfnaldsmlasdmg.png"
    }),
    )
  }),

// ユーザー情報変更APIのモックハンドラーを追加
rest.put('/user/:user_id', (req, res, ctx) => {
  sessionStorage.setItem('is-authenticated', 'true')

  // リクエストからユーザーIDを取得

  // ユーザー情報を更新するロジックをここに追加
  // 例: データベースからuserIdに対応するユーザーを更新

  return res(
    ctx.status(204), // 成功の場合は204を返す
  );
}),


rest.post('/articles', (req, res, ctx) => {
  // Persist user's authentication in the session
  sessionStorage.setItem('is-authenticated', 'true')
  return res(
    // Respond with a 200 status code
    ctx.status(201),
    ctx.json({
      article_id: 1
  })
  )
}),

// 投稿記事のget
rest.get('/articles/:article_id', (req, res, ctx) => {
  // ユーザーが認証されているかどうかを確認する
  const isAuthenticated = sessionStorage.getItem('is-authenticated')

  if (!isAuthenticated) {
    // 認証されていない場合、403エラーで応答する
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not authorized',
      }),
    )
  }

  // 認証された場合、模擬ユーザの情報を返す
  return res(
    ctx.status(200),
    ctx.json({
      "title": "リアクト太郎",
      "content": "react.tarou@example.com",
  }),
  )
}),
]