

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/page/Home';
import PhimBoPage from './component/page/PhimBoPage';
import PhimLePage from './component/page/PhimLePage';
import PhimRapPage from './component/page/PhimRapPage';
import PhimHoatHinhPage from './component/page/PhimHoatHinhPage'
import Topbar from './component/topbar/Topbar';
import Detail from './component/watch/Detail';
import Footer from './component/footer.js/Footer';
import { GlobalContext } from './GlobalContext'
import { useContext, useState } from 'react';
import Loading from './component/until/Loading';
import Search from './component/page/Search';
import UserPage from './component/topbar/UserPage';
function App() {
  const context = useContext(GlobalContext)
  const [loading] = useContext(GlobalContext).phim.loading
  const [isSearch, setIsSearch] = useState(false)
  const [phimbo] = context.phim.phimBo
  const [phimle] = context.phim.phimLe
  const [phimrap] = context.phim.phimRap
  const [phimHH] = context.phim.phimHoatHinh
  const [isPhim, setIsPhim] = useState(false)
  const [phimSearch, setPhimSearch] = useState([])
  const [isClick, setIsClick] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }
  const clickSearch = () => {

    setIsSearch(!isSearch)
  }

  const removeAccents = (str) => {
    let AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"
    ];
    for (let i = 0; i < AccentsMap.length; i++) {
      let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      let char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  const clickScrolled = () => {
    document.onscroll = 0
    document.documentElement.scrollTop = 0
  }
  const [valueSearch, setValueSearch] = useState('')
  const handleSearch = e => {
    setValueSearch(e.target.value)

  }
  const getPhim = () => {
    let movie = []
    if (valueSearch) {
      phimbo.forEach(p => {
        if (p.title.toLowerCase().search(valueSearch.toLowerCase()) !== -1 || removeAccents(p.title.toLowerCase()).search(valueSearch.toLowerCase()) !== -1) {
          
          movie.push(p)
        } 
      });
      phimle.forEach(p => {
        if (p.title.toLowerCase().search(valueSearch.toLowerCase()) !== -1 || removeAccents(p.title.toLowerCase()).search(valueSearch.toLowerCase()) !== -1) {
        
          movie.push(p)
        }
      });
      phimrap.forEach(p => {
        if (p.title.toLowerCase().search(valueSearch.toLowerCase()) !== -1 || removeAccents(p.title.toLowerCase()).search(valueSearch.toLowerCase()) !== -1) {
      
          movie.push(p)
        } 

      });
      phimHH.forEach(p => {
        if (p.title.toLowerCase().search(valueSearch.toLowerCase()) !== -1 || removeAccents(p.title.toLowerCase()).search(valueSearch.toLowerCase()) !== -1) {
          setIsPhim(true)
       
        } 
      });


      setValueSearch('')
      setPhimSearch(movie)


    }
  }
  const handleClickLogin = () => {
    setIsClick(!isClick)
  }
  return (
    <div className='App'>
      <Router>
        <Topbar clickSearch={clickSearch} clickLoginPage={handleClickLogin} />
        <UserPage isClick={isClick} clickLoginPage={handleClickLogin} />
        {isSearch ? <Search value={valueSearch} handleSearch={handleSearch} onSubmit={getPhim} phim={phimSearch} isPhim={isPhim} /> : ''}
        {
          loading ? <Loading /> : <>

            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/home' component={Home} exact />
              <Route path='/phim/:id' component={Detail} />
              <Route path='/phimbo' component={PhimBoPage} />
              <Route path='/phimle' component={PhimLePage} />
              <Route path='/phimrap' component={PhimRapPage} />
              <Route path='/hoathinh' component={PhimHoatHinhPage} />
            </Switch>
            <div className='croll-top' style={isScrolled ? { display: 'block' } : { display: 'none' }}>
              <i className="fas fa-chevron-circle-up" onClick={() => clickScrolled()} />
            </div>
            <Footer />
          </>
        }

      </Router>
    </div>
  );
}

export default App;
