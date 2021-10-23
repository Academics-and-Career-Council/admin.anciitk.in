Admin portal admin page made
essensially a dashboard, where admins, managers and secretaries can access if they have permissions

env variables used-
1. NEXT_PUBLIC_KRATOS_URL=http://localhost:4455/.ory/kratos/public
used for kratos.
2. NEXT_PUBLIC_XENON_BASE_URL=http://localhost:4455/.xenon
used for xenon.
3. NEXT_PUBLIC_BASE_URL=http://localhost:3000
Used specifically when the session is not defined, in case that occurs, and assigns a session state in the index page.
4. NEXT_PUBLIC_LOGIN_URL
Used specifically if used is either not logged in, or if he doesnt have access, i.e., is a student. (S)He will be redirected to the accounts portal to login.  