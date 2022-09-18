import { css } from "lit";

export const formStyles = css`

  
.memory-form-wrapper {
  margin-top:4rem;

}

.memory-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px;
}

.memory-form textarea {
  resize: none;
}

.memory-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
  padding-top: 10px;

}

.memory-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.memory-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
  opacity: 1;
}

.memory-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.memory-form .form-control::-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.memory-form .form-control:focus {
  border-color: #f33fb0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px #f33fb0;
}

.memory-form .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.memory-form .description {
  color: #aeb4b9;
  font-size: 14px;
  text-align: center;
}

.memory-form .submit-button-wrapper {
  text-align: center;
}

.memory-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  background-color: #f23292;
  color: white;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 500;
  letter-spacing: 2px;
}

.memory-form .submit-button-wrapper input:hover {
  background-color: #d30069;
}
.input-field{
  border:white;
  width:100%;
}
.input-container{
  margin:5px;

}

.custom-file-upload {
  border: 1px solid white;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #fef8f8;
  color:	#FFB6C1;

}
`;