import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Label = styled.label`
  font-size: 14px;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Upload = ({ open, setOpen }) => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [imgPercentage, setImgPercentage] = useState(0);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl"
          ? setImgPercentage(Math.round(progress))
          : setVideoPercentage(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log("File available at", downloadUrl);
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadUrl };
          });
        });
      }
    );
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/videos/`, { ...inputs, tags });
      if (res.status === 200) {
        setOpen(false);
        navigate(`/video/${res.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video:</Label>
        {videoPercentage > 0 ? (
          "Uploading... " + videoPercentage + "%"
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}

        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
        />
        <Desc
          rows={8}
          placeholder="Description"
          name="desc"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Separate the tags with commas."
          onChange={handleTags}
        />
        <Label>Image:</Label>
        {imgPercentage > 0 ? (
          "Uploading... " + imgPercentage + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}

        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
