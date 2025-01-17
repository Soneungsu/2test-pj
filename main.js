document.addEventListener("DOMContentLoaded", () => {
  // 사이드바 관련 DOM 요소
  const cartSidebar = document.getElementById("cartSidebar");
  const cartIframe = document.getElementById("cartIframe");

  // jQuery로 동적으로 로드된 헤더의 버튼 이벤트 바인딩
  $(document).on("click", "#cartButton", function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    const url = $(this).attr("href"); // href에서 URL 가져오기

    if (cartIframe && cartSidebar) {
      cartIframe.src = url; // iframe에 URL 설정
      cartSidebar.classList.add("open"); // 사이드바 열기
    }
  });

  // 사이드바 닫기 기능 (사이드바 영역 클릭 시 닫힘)
  cartSidebar.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
  });
});