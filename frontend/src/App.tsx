import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import AddBanket from "./Pages/Banket";
import { useAppContext } from "./contexts/AppContext";
import MyBankets from "./Pages/MyBankets";

function App() {

  const {isLoggedIn} = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home Page</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>} />

        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>

        {isLoggedIn && (
          <>
          <Route 
          path="/add-banquet"
          element={
            <Layout>
              <AddBanket/>
            </Layout>
          }/>
          <Route 
          path="/my-banquet"
          element={
            <Layout>
              <MyBankets/>
            </Layout>
          }/>
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
