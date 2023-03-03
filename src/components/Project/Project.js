import css from './project.module.css'


const Project = ({data}) => {
  const {img}=data
    console.log(img);
    return (
  <div className={css.boxProject}>
      <div>
          <h2 className={css.title}>{data.title}</h2>
          <div className={css.boxImg}>
              <img className={css.img} src={img} alt=""/>
          </div>

      </div>

  </div>
);
};

export {Project};