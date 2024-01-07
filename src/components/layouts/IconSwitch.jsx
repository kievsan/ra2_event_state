import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import PropTypes from 'prop-types';

import classes from './main.module.css';


const IconSwitch = ({icon, onSwitch}) => {
    return (
        <div className={classes["iconSwitchWrap"]}>
            <button className={classes["iconSwitch"]} type="button" onClick={onSwitch}>
                <i className={classes['material-icons']}>
                    {
                        icon === "view_list" 
                        ? <ViewListIcon fontSize="large" color="action" /> 
                        : <ViewModuleIcon fontSize="large" color="action" />
                    }
                </i>
            </button>
        </div>
    );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;
