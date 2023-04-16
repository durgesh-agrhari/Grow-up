import SideNav , { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import './sidenav.css'
import { useNavigate } from 'react-router-dom'


function Sidenav () {
    //for active nave page Use activenavigate 

    const navigate = useNavigate();

    return <SideNav className="sidenav"
        onSelect = {selected => {
            console.log(selected)
            navigate("/" + selected)
        }}>

            <SideNav.Toggle />
            <SideNav.Nav defaultselected="home">

                <NavItem eventkey="home">
                    <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: "1.8em"}}></i></NavIcon>
                    <NavText>home</NavText>
                </NavItem>

                <NavItem eventkey="video">
                    <NavIcon><i class="fa-solid fa-video" style={{fontSize: "1.8em"}}></i></NavIcon>
                    <NavText>Vodeo</NavText>
                </NavItem>

                <NavItem eventkey="tutorials">
                    <NavIcon><i className='fa-brands fa-youtube' style={{fontSize: "1.8em"}}></i></NavIcon> 
                    <NavText>Tutorials</NavText>
                </NavItem>

                <NavItem eventkey="videotute">
                    <NavIcon><i class="fa-solid fa-video" style={{fontSize: "1.8em"}}></i></NavIcon>
                    <NavText>Vodeo tute</NavText>

                    <NavItem>
                        <NavText>Video 1</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>Video 2</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>Video 3</NavText>
                    </NavItem>
                    <NavItem>
                        <NavText>Video 4</NavText>
                    </NavItem>

                </NavItem>

            </SideNav.Nav>
    </SideNav>
}

export default Sidenav