import React from "react";
export default function WelcomeBack() {
  return (
    <div class="d-flex flex-column justify-content-center w-100 h-100">

    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="fw-light text-white m-0">Welcome back!</h1>
      <div class="btn-group my-5">
        <a href="/user/me" class="btn btn-outline-light" aria-current="page"><i class="fas fa-file-download me-2"></i> My Profile</a>
        <a href="/user/me" class="btn btn-outline-light">My Posts <i class="fas fa-expand ms-2"></i></a>
      </div>
      <a href="/posts" class="text-decoration-none">
        <h5 class="fw-light text-white m-0">— Let's get started —</h5>
      </a>
    </div>
  </div>
  );
}