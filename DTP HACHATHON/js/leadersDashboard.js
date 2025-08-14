let images = [
        {src: "/images/supporting children.png", text: "Ensure transparency and inclusiveness while deliveling food aid"},
        {src: "/images/supporting output.png", text: "We desire to reach to the total quality life at all population distribution. Now me and you can we abide together, to  encourage quality food production and consumption "},
    ];
    let index = 0;

    function changeImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        let img = document.getElementById("displayImage");
        let caption = document.getElementById("captionText");
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = images[index].src;
            caption.textContent = images[index].text;
            img.style.opacity = 1;
        }, 300);
    }