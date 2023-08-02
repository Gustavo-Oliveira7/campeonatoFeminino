const token =  'Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW5AYWRtaW4uY29t.vSMJu-krftTkVlavLvzELuzUZpWf7PtmkwnM5H2_AdM'

const login = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const findUser = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

export {login, token, findUser}