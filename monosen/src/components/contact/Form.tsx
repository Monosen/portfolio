import "./Form.style.scss";

type Inputs = {
  name: string;
  email: string;
  subjet: string;
  message: string;
};

export const Form = () => {
  return (
    <form className="form-one text-align-center">
      <div className="form">
        <div className="form-background"></div>
        <input type="text" required />
        <label className="lbl-name">
          <span className="text-name">Name</span>
        </label>
      </div>
      <div className="form">
        <input type="mail" required />
        <label className="lbl-name">
          <span className="text-name">Email</span>
        </label>
      </div>
      <div className="form">
        <input type="text" required />
        <label className="lbl-name">
          <span className="text-name">Subject</span>
        </label>
      </div>
      <div className="form-message">
        <textarea cols={30} rows={10} required></textarea>
        <label className="lbl-name">
          <span className="text-name-one">Your Message</span>
        </label>
      </div>
      <input className="bottom" type="submit" value="Submit" />
    </form>
  );
};
