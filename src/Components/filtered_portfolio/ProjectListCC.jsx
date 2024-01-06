import PropTypes from 'prop-types';

import classes from './main.module.css';


const ProjectList = ({projects}) => (
  <div className={classes.projectListRoot}>
    {
      projects.map((proj, idx) => {
        const {img, category} = proj;
        const name = img.split('/').pop().split('.')[0];
        
        return (
          <div className={classes.imgWrapper} key={idx+img}>
            <img className={classes.img} alt={category+" image "+name} 
            key={idx+img+category} 
            src={img} />
          </div>
        )
      })
    }
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }),
  )
}

export default ProjectList;
