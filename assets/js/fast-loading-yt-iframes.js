document.addEventListener("DOMContentLoaded", function () {
    const youtubeIframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');
  
    if (youtubeIframes.length > 3) {
      // Keep the first three videos as-is
      youtubeIframes.forEach((iframe, index) => {
        if (index >= 3) {
          // Replace remaining iframes with placeholders
          const videoId = iframe.src.split("/embed/")[1].split("?")[0]; // Extract video ID
          const placeholder = document.createElement("div");
          placeholder.className = "youtube-placeholder";
          placeholder.setAttribute("data-video-id", videoId);
          placeholder.style.width = iframe.width + "px";
          placeholder.style.height = iframe.height + "px";
          placeholder.style.background = "#000 url('https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg') center center / cover";
  
          iframe.parentNode.replaceChild(placeholder, iframe);
        }
      });
  
      // Load remaining videos after the page has fully loaded
      window.addEventListener("load", function () {
        const placeholders = document.querySelectorAll(".youtube-placeholder");
        placeholders.forEach((placeholder) => {
          const videoId = placeholder.getAttribute("data-video-id");
  
          // Create the iframe
          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.width = placeholder.style.width.replace("px", "");
          iframe.height = placeholder.style.height.replace("px", "");
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
  
          placeholder.replaceWith(iframe);
        });
      });
    }
  });
  