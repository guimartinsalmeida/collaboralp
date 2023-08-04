import { isMobile } from 'react-device-detect';
import MobileComponent from './Mob';
import DesktopComponent from './Desk';


const SecondSection = () => {
   return isMobile ? <MobileComponent /> : <DesktopComponent />;

};

export default SecondSection;
