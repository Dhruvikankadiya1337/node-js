import { useState } from "react";
import { createBlog } from "../services/blogservice.js";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await createBlog({ title, content });
    navigate("/");
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={submit}>
        <h2>Add Blog</h2>
        <input placeholder="Title" onChange={e=>setTitle(e.target.value)} />
        <textarea placeholder="Content" onChange={e=>setContent(e.target.value)} />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
