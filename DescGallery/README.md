# 설명리스트를 곁들인 갤러리

- 2024-05-18
- https://kimsonamu.github.io/homework/DescGallery/dist/
- 기능 : Image thumbnail 선택시 해당 이미지 뷰 + 설명 title 클릭시 해당 이미지 뷰
- 트리구조
```
├── assets
│   └── api
│       └── imgInfoList.js
├── components
│   └── Gallery.jsx, .scss
│          ├── GalleryViewer.jsx, .scss
│          │        └──GalleryItem.jsx
│          └── GalleryList.jsx, .scss
│                   └──GalleryListItem.jsx
└── App.jsx
```
