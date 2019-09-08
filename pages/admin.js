import useRouter from 'next/router';

const Admin = () => <h1>Admin</h1>;

Admin.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/static/admin/index.html'
    });
    res.end();
  }
  return {};
};

export default Admin;
