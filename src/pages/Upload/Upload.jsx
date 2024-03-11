import "./Upload.scss";
import thumbnail from "../../assets/images/pictures/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../../utils/brain-flix-api";
const {v4:uuidv4} = require('uuid');

function Upload() {
  const navigate = useNavigate();
  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [invalidInput, setInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChangeTitle = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  }

  const publishVideo = async (event) => {
    event.preventDefault();

    if (videoTitle.trim() === "") {
      setInvalidInput(true);
      setErrorMessage("Video title");
    } else if (description.trim() === "") {
      setInvalidInput(true);
      setErrorMessage("Video description");
    }else if (!image) {
      setInvalidInput(true);
      setErrorMessage("Video thumbnail");
    } else {
      try {
        const newVideo = {
          title: videoTitle,
          description,
          image,
          channel: 'Moey Ran',
          timestamp: new Date(),
          views: 888888,
          likes: 77777,
          comments:[{
            id: uuidv4(),
            name: "Mohan Muruge",
            comment: "Thank you for posting! It's the best video I've ever seen!",
            timestamp: new Date()
          }]
        };
        await apiClient.postVideo(newVideo);

        setSubmitSuccess(true);
        setInvalidInput(false);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        setHasError(true);
      }
    }
  };

  const clearForm = () => {
    setVideoTitle("");
    setDescription("");
  };

  return (
    <section className="upload-section">
      <h1 className="upload-section__title">Upload Video</h1>
      <form className="form" method="POST" encType="multipart/form-data">
        <section className="form-image-inputs-wrap">
          <section className="form-thumbnail-section">
            <label className="form__item-label">
              VIDEO THUMBNAIL
              <img className="form__thumbnail-image" src={image ? URL.createObjectURL(image) : thumbnail} alt="" />
              <input className="form__thumbnail-upload" 
              type="file" 
              name="image" 
              accept=".jpg, .jpeg, .png"
              onChange={handleChangeImage}/>
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
          <button
            type="submit"
            onClick={publishVideo}
            className="default-button form__publish-button"
          >
            PUBLISH
          </button>
          <Link to="/">
            <button
              onClick={clearForm}
              className="default-button form__cancel-button"
            >
              CANCEL
            </button>
          </Link>

          {submitSuccess && (
            <div className="success-message">
              Successfully published. Taking you to the HOME page
            </div>
          )}
          {hasError && (
            <div className="error-message">
              Form has errors, please come back later
            </div>
          )}
        </section>
      </form>
    </section>
  );
}

export default Upload;
