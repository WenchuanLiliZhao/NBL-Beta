// import { useEffect, useState } from 'react';
import { useEffect } from 'react';

export default function PageSmoothScroll() {
  useEffect(() => {
    const target = document.querySelector("html");
    target?.classList.add("smooth-scroll");
  }, []);
}