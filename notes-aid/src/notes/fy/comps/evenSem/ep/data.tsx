import { Brain } from "lucide-react"; 

const ep = {
  name: "Engineering Physics",
  icon: Brain,
  color: "blue",
  modules: {
    1: {
      notesLink: ["https://drive.google.com/drive/folders/1xVDw2nE9gypl9OIuWQEd1Mu7lazjBmu1?usp=drive_link"],
      topics: [
        {
          title: "1.1 Lasers",
          description: "Easy to cover topic",
          videos: [
            {
              title: "Laser Playlist",
              url: "https://www.youtube.com/watch?v=MfQCav-N24A&list=PLQzUXa8lZVq8flXCtrKZ7e9vFfgpynWqz"
            }
          ]
        },
        {
          title: "1.2 Optical Fibers",
          description: "Easy to cover topic",
          videos: [
            {
              title: "Optical Fibers Playlist",
              url: "https://www.youtube.com/playlist?list=PLQzUXa8lZVq8c5fWjeSLsUaKu_BmcKL2A"
            }
          ]
        }
      ]
    },
    2: {
      notesLink: ["https://drive.google.com/drive/folders/1nYx8pLm7Z5OCMjgLR69xdGri_-JpOV6l?usp=drive_link"],
      topics: [
        {
          title: "2.1 Semiconductor",
          description: "Bit complex to understand",
          videos: [
            {
              title: "Semiconductor Playlist",
              url: "https://www.youtube.com/playlist?list=PLQzUXa8lZVq8lfZN5836sohUpRCt2b6oB"
            }
          ]
        },
        {
          title: "2.2 Dielectric",
          description: "Quite Lengthy theory Focus on numericals",
          videos: [
            {
              title: "Dielectric Playlist",
              url: "https://www.youtube.com/playlist?list=PLAPKGqvQGg6rR96A5REMgwkeacPOhn83X"
            }
          ]
        },
        {
          title: "2.3 Liquid Crystal",
          description: "Easy to cover topic",
          videos: [
            {
              title: "Liquid Crystal Playlist",
              url: "https://www.youtube.com/playlist?list=PLQzUXa8lZVq-GpWcleSQCxu1pczvgWTgJ"
            }
          ]
        }
      ]
    },
    3: {
      notesLink: ["https://drive.google.com/drive/folders/1M6UAZ1jMc88Au-dh804sxLsyXUscZOgr?usp=drive_link"],
      topics: [
        {
          title: "3.1 Quantum Mechanics",
          description: "Needs Some Foundational basics to understand, bit hard though",
          videos: [
            {
              title: "Quantum Mechanics Playlist",
              url: "https://www.youtube.com/playlist?list=PLQzUXa8lZVq8Zciw0MsOdPJ1t-bpPKV6_"
            }
          ]
        }
      ]
    },
    4: {
      notesLink: ["https://drive.google.com/drive/folders/1d0Yb0QHV4NeYbIZwRMPwfQ3B8ak9LNfA?usp=drive_link"],
      topics: [
        {
          title: "4.1 Electromagnetism and Introduction to Plasma Physics",
          description: "Bit complex and Lengthy",
          videos: []
        }
      ]
    },
    5: {
      notesLink: ["https://drive.google.com/drive/folders/1Bdh7hUxWNbV1roc1h3HFjcKGp9O_fqp-?usp=drive_link"],
      topics: [
        {
          title: "5.1 Physics of Sensors for IoT Applications",
          description: "Easy to cover topic",
          videos: [
            {
              title: "IoT Sensors Playlist",
              url: "https://www.youtube.com/playlist?list=PL91lquAVmESBqKLU0Tn5gRVXVyW5KLgCa"
            }
          ]
        }
      ]
    }
  }
};

export default ep;
