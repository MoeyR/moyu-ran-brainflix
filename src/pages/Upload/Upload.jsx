import "./Upload.scss";
import thumbnail from "../../assets/images/pictures/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();
  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeTitle = (event)=>{
    setVideoTitle(event.target.value);
  }

  const handleChangeDescription = (event)=>{
    setDescription(event.target.value);
  }


  const publishVideo = (event) => {
    event.preventDefault();

    if(videoTitle.trim() === ""){
      setInvalidInput(true);
      setErrorMessage("Video title");
    }else if(description.trim() === ""){
      setInvalidInput(true);
      setErrorMessage("Video description");
    }else{
      setSubmitSuccess(true);
      setInvalidInput(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    
  };

  const clearForm = ()=>{
    setVideoTitle("");
    setDescription("");
  }

  return (
    <section className="upload-section">
      <h1 className="upload-section__title">Upload Video</h1>
      <form className="form">
        <section className="form-image-inputs-wrap">
          <section className="form-thumbnail-section">
            <label className="form__item-label">
              VIDEO THUMBNAIL
              <img className="form__thumbnail-image" src={thumbnail} alt="" />
            </label>
          </section>
          <section className="details-input-section">
            <label className="form__item-label" htmlFor="title">
              TITLE YOUR VIDEO
              <input
                className="form__item-input"
                type="text"
                name="title"
                placeholder="Add a title to your video"
                onChange={handleChangeTitle}
              />
            </label>
            <label className="form__item-label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="form__item-input form__item-input--textarea"
                name="description"
                placeholder="Add a description to your video"
                onChange={handleChangeDescription}
              ></textarea>
            </label>
            {invalidInput && (
                <div className="error-message">{errorMessage} is required</div>
            )}
          </section>
        </section>
        <section className="form__buttons-wrap">
          <button type="submit" onClick={publishVideo} className="default-button form__publish-button">
            PUBLISH
          </button>
          <Link to="/">
            <button onClick={clearForm} className="default-button form__cancel-button">CANCEL</button>
          </Link>
          
          {submitSuccess && (
              <div className="success-message">
                Successfully published. Taking you to the HOME page
              </div>
          )}
        </section>
      </form>
    </section>
  );
}

export default Upload;
