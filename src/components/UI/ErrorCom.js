import classes from './ErrorCom.module.css';
const ErrorCom = (porps) => {
    return (
      <>
        {porps.message.length  > 0 && (
          <div className={classes.wrapper}>
            <p>{porps.message}</p>
          </div>
        )}
      </>
    );
}

export default ErrorCom;