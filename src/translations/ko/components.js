export default {
  title: "핵심 컴포넌트",
  description:
    "컴포넌트는 사용자 인터페이스의 주요 구성 요소입니다. 재사용 가능한 컴포넌트 라이브러리를 구축하면 디자인 및 기술 부채를 줄이고 제품 개발 워크플로우를 향상시킬 수 있습니다. 핵심 컴포넌트는 의미를 잃지 않고는 더 작은 단위로 분해될 수 없습니다.",
  sections: {
    "c-accordion": {
      title: "아코디언",
      description:
        "아코디언은 트리거 요소가 클릭되었을 때 콘텐츠 영역의 가시성을 전환합니다.",
      checklist: {
        "c-accordion-active": {
          title: "활성 상태",
          description:
            "아코디언은 콘텐츠 가시성을 전환하기 위한 두 가지 상태를 가집니다. 아코디언 트리거에 아이콘이 표시되는 경우, 상태에 따라 시각적으로 구분되어야 합니다.",
        },
        "c-accordion-composition": {
          title: "구성",
          description:
            "콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-accordion-transition": {
          title: "전환 애니메이션",
          description:
            "상태 전환 시 사용자가 컴포넌트의 동작을 이해하고 따라갈 수 있도록 미묘한 애니메이션을 추가합니다.",
        },
        "c-accordion-a11y-relation": {
          title: "콘텐츠와 트리거 관계",
          description:
            "보조 기술로 콘텐츠 영역에 포커스할 때 트리거 요소의 추가 컨텍스트를 알려야 합니다.",
        },
      },
    },
    "c-alert": {
      title: "알림",
      description:
        "알림은 전체 페이지나 특정 영역에 대한 중요한 메시지를 표시합니다.",
      checklist: {
        "c-alert-colors": {
          title: "색상",
          description:
            "알림의 역할에 따라 시각적 모양을 구분하는 것이 중요합니다. 역할 구분을 위해 배경색을 사용하는 경우, 알림 내부에 표시되는 콘텐츠와의 대비율이 충분한지 확인하세요.",
        },
        "c-alert-title": {
          title: "제목 지원",
          description:
            "긴 알림 메시지의 경우 제목을 지원하면 사용자가 메시지의 맥락을 더 빠르게 이해할 수 있습니다.",
        },
        "c-alert-icon": {
          title: "아이콘 지원",
          description:
            "아이콘은 알림의 역할을 설명하고 색맹인 사용자에게 추가적인 힌트를 제공합니다.",
        },
        "c-alert-actions": {
          title: "보조 액션",
          description:
            "알림의 액션은 텍스트와 연관되어야 하며 사용자에게 전달된 메시지에 대응할 수 있는 방법을 제공해야 합니다.",
        },
        "c-alert-responsive": {
          title: "반응형",
          description:
            "알림은 뷰포트 크기에 맞게 조정될 수 있으며, 일반적으로 모바일에서는 공간을 절약하기 위해 전체 너비로 표시됩니다.",
        },
        "c-alert-a11y-roles": {
          title: "접근성 역할",
          description:
            "보조 기술을 사용할 때 알림은 접근성 역할을 올바르게 알려야 합니다.",
        },
      },
    },
    "c-avatar": {
      title: "아바타",
      description:
        "사용자 사진, 조직 또는 다른 유형의 콘텐츠를 시각적으로 표현하는 썸네일입니다.",
      checklist: {
        "c-avatar-image": {
          title: "이미지",
          description:
            "아바타는 이미지를 형태에 맞게 마스킹해야 하며, 알 수 없는 데이터 소스에서 이미지를 가져올 수 있으므로 모든 이미지 크기에서 작동해야 합니다.",
        },
        "c-avatar-image-fallback": {
          title: "이미지 대체",
          description:
            "이미지를 전달하지 않거나 이미지 로딩 오류가 발생할 경우, 아바타는 다른 이미지, 아이콘 또는 텍스트 이니셜로 대체할 수 있어야 합니다.",
        },
        "c-avatar-sizes": {
          title: "크기",
          description:
            "아바타를 사용하는 맥락이 다양하므로 컴포넌트에 대한 다양한 크기가 필요합니다. 일반적인 프로젝트의 경우 최소 2-3개의 다른 크기를 사용하고 작은 크기를 반드시 포함하세요.",
        },
        "c-avatar-colors": {
          title: "색상",
          description:
            "이미지 없이 사용할 때는 아바타 형태에 배경색을 적용해야 합니다. 아이콘과 텍스트가 WCAG AA 표준에 따라 배경과 충분한 대비율을 가지는지 확인하세요.",
        },
        "c-avatar-shape": {
          title: "형태",
          description:
            "아바타는 사용되는 영역에 따라 사각형이나 원형과 같은 여러 형태를 지원할 수 있습니다.",
        },
        "c-avatar-group": {
          title: "아바타 그룹",
          description:
            "여러 아바타를 함께 쌓아서 사용자 그룹을 표현할 수 있습니다.",
        },
        "c-avatar-a11y-label": {
          title: "접근성 레이블",
          description:
            "아바타가 장식용이 아닌 이미지에 사용되고 내용에 대한 텍스트 표현이 없는 경우 접근성 레이블을 제공해야 합니다.",
        },
      },
    },
    "c-badge": {
      title: "배지",
      description: "객체의 상태나 사용자 입력을 나타내는 간단한 요소입니다.",
      checklist: {
        "c-badge-colors": {
          title: "색상",
          description:
            "배지는 제품에서 다양한 역할을 수행할 수 있으며, 각 역할에 대해 미리 정의된 색상을 사용하면 사용자가 의미를 이해하는 데 도움이 됩니다. 색상을 변경할 때는 WCAG AA 표준에 따라 텍스트와 배경 간의 대비율이 충분한지 확인하세요.",
        },
        "c-badge-variants": {
          title: "변형",
          description:
            "제품 내 배지가 표시되는 위치에 따라 여러 컴포넌트 변형을 지원할 수 있습니다. 예를 들어, 너무 많은 주의를 끌지 않도록 페이드된 배경을 사용하는 배지를 만들 수 있습니다.",
        },
        "c-badge-sizes": {
          title: "크기",
          description:
            "배지는 사용되는 위치에 따라 여러 크기로 제공될 수 있습니다. 예를 들어, 마케팅 페이지에는 큰 크기를 사용할 수 있습니다.",
        },
        "c-badge-icon-support": {
          title: "아이콘 지원",
          description:
            "배지의 의미를 더 잘 설명하기 위해 텍스트 옆에 아이콘을 표시할 수 있습니다. 작은 배지의 경우에도 아이콘 내용을 인식할 수 있는지 확인하세요.",
        },
        "c-badge-dismiss": {
          title: "해제 액션",
          description:
            "배지는 선택된 값을 동적으로 표시하는 데 사용될 수 있으며, 이를 해제할 수 있는 방법이 있어야 합니다.",
        },
        "c-badge-empty": {
          title: "빈 상태",
          description:
            "배지는 내부에 텍스트 내용 없이 사용될 수 있습니다. 이 경우 일반적으로 올바른 형태를 유지하기 위해 스타일을 변경해야 합니다.",
        },
        "c-badge-positioning": {
          title: "위치 지정",
          description:
            "알림 표시기와 같은 상태 배지로 사용될 때는 해당 요소를 기준으로 위치를 지정할 수 있어야 합니다.",
        },
      },
    },
    "c-button": {
      title: "버튼",
      description: "단일 단계 작업에 사용되는 상호작용 요소입니다.",
      checklist: {
        "c-button-colors": {
          title: "색상",
          description:
            "버튼은 제품에서 다양한 역할을 수행할 수 있으며, 각 역할에 대해 미리 정의된 색상을 사용하면 사용자가 의미를 이해하는 데 도움이 됩니다. 색상을 변경할 때는 WCAG AA 표준에 따라 텍스트와 배경 간의 대비율이 충분한지 확인하세요.",
        },
        "c-button-variants": {
          title: "변형",
          description:
            "여러 버튼을 사용할 때는 기본 액션과 보조 액션을 구분할 수 있어야 합니다. 버튼은 사용자에게 다른 역할을 수행하거나 다양한 표면에서 사용될 수 있으며, 그에 따라 외관이 변경되어야 합니다.",
        },
        "c-button-sizes": {
          title: "크기",
          description:
            "버튼이 사용되는 위치에 따라 여러 크기로 제공될 수 있습니다. 예를 들어, 애플리케이션의 밀집된 영역에는 작은 크기를 사용할 수 있습니다.",
        },
        "c-button-icon": {
          title: "아이콘 지원",
          description:
            "아이콘은 레이블 옆에 사용될 때 버튼의 목적을 쉽게 전달하거나, 공간이 부족할 때 텍스트 없이 사용될 수 있습니다. 아이콘만 사용할 때는 접근성 레이블을 제공해야 합니다.",
        },
        "c-button-hover": {
          title: "호버 상태",
          description:
            "마우스 커서를 올렸을 때 버튼이 상호작용 가능함을 명확히 보여주세요.",
        },
        "c-button-active": {
          title: "활성 상태",
          description:
            "버튼이 눌리거나, 값 선택에 사용되거나, 페이지의 다른 요소를 토글할 때 시각적 표시를 제공하세요.",
        },
        "c-button-loading": {
          title: "로딩 상태",
          description:
            "버튼을 누른 후 사용자가 결과를 기다려야 할 때를 표시합니다. 스피너를 사용하여 이 상태를 표시할 경우, 원래 버튼의 너비나 높이가 변경되지 않도록 하세요.",
        },
        "c-button-disabled": {
          title: "비활성화 상태",
          description:
            "버튼이 상호작용할 수 없음을 시각적으로 보여주고 누르는 것을 제한합니다.",
        },
        "c-button-a11y-role": {
          title: "접근성 역할",
          description:
            "버튼은 버튼이나 링크의 접근성 역할을 올바르게 알려야 하며, 전달된 속성을 기반으로 자동으로 해결해야 합니다.",
        },
        "c-button-a11y-focus": {
          title: "포커스 표시",
          description:
            "키보드나 보조 기술을 사용하여 포커스될 때 버튼은 시각적 포커스 표시가 있어야 합니다.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "경로 탐색",
      description:
        "현재 페이지의 위치를 이해하고 상위 페이지로 이동할 수 있도록 도와주는 최상위 제품 탐색 기능입니다.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "아이콘 지원",
          description:
            "아이콘은 경로 탐색 항목이 연결하는 페이지의 역할을 전달하는 데 도움이 됩니다. 대부분의 경우 목록의 임의 항목에만 사용하는 것이 아니라 일관되게 사용되도록 해야 합니다.",
        },
        "c-breadcrumbs-disabled": {
          title: "비활성화 상태",
          description:
            "사용자가 특정 페이지로 이동하는 것을 방지하기 위해 목록의 각 항목을 개별적으로 비활성화할 수 있습니다.",
        },
        "c-breadcrumbs-collapsed": {
          title: "축소 상태",
          description:
            "경로 탐색 항목이 부모 컨테이너에 맞지 않는 경우, 목록은 사용자에게 관련 있는 항목만 표시되도록 항목을 축소하는 기능을 지원해야 합니다.",
        },
        "c-breadcrumbs-separator": {
          title: "사용자 정의 구분자",
          description:
            "사용 맥락에 따라 경로 탐색 목록의 항목은 다른 구분자 스타일을 사용할 수 있습니다.",
        },
      },
    },
    "c-calendar": {
      title: "달력",
      description:
        "하나 이상의 월의 날짜를 표시하는 그리드로, 사용자가 단일 날짜나 날짜 범위를 선택할 수 있게 합니다.",
      checklist: {
        "c-calendar-modes": {
          title: "표시 모드",
          description:
            "달력은 다양한 제품 영역과 뷰포트에서 사용될 수 있습니다. 두 개 이상의 월을 표시하거나 세로 레이아웃을 위한 다양한 표시 모드를 지원하세요.",
        },
        "c-calendar-selected": {
          title: "선택 상태",
          description:
            "달력은 단일 날짜와 선택 범위를 지원해야 합니다. 선택된 날짜는 시각적으로 강조되어야 하며, 선택된 날짜 사이의 범위가 사용자에게 보여야 합니다.",
        },
        "c-calendar-month-selection": {
          title: "월 선택",
          description:
            "사용자가 긴 날짜 범위를 탐색하는 데 도움이 되도록 달력은 표시되는 월을 쉽게 전환할 수 있는 방법을 제공해야 합니다.",
        },
        "c-calendar-day-names": {
          title: "요일 이름",
          description:
            "사용자가 날짜 선택을 더 쉽게 탐색할 수 있도록 날짜 숫자와 함께 요일 이름의 짧은 레이블을 제공하세요.",
        },
        "c-calendar-i18n": {
          title: "국제화",
          description:
            "달력은 제품이 지원하는 모든 국가 지역에 맞게 현지화되어야 합니다. 여기에는 날짜 형식과 요일의 올바른 순서가 포함됩니다.",
        },
        "c-calendar-a11y-keyboard": {
          title: "키보드 탐색",
          description:
            "달력 날짜는 키보드와 보조 기술로 포커스할 수 있어야 합니다. 날짜 탐색은 키보드 화살표나 스크린 리더 탐색으로 이루어져야 하며, 열이나 행 밖으로 탐색하여 월을 전환하는 것을 지원해야 합니다.",
        },
        "c-calendar-a11y-state": {
          title: "상태 안내",
          description: "선택된 날짜는 포커스될 때 보조 기술이 알려야 합니다.",
        },
      },
    },
    "c-card": {
      title: "카드",
      description: "주제와 관련 작업에 대한 정보를 그룹화하는 컨테이너입니다.",
      checklist: {
        "c-card-composition": {
          title: "콘텐츠 구성",
          description:
            "콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-card-media-sections": {
          title: "미디어 섹션",
          description:
            "카드는 미디어 콘텐츠와 자주 사용됩니다. 가장 인기 있는 옵션은 콘텐츠 상단에 전체 너비 영역을 두거나 카드의 한쪽에 영역을 두는 것입니다.",
        },
        "c-card-actions": {
          title: "보조 작업",
          description:
            "카드는 일반적으로 카드 하단에 배치되는 작업과 함께 사용되거나, 카드 자체가 탭 가능하고 작업을 나타낼 수 있습니다.",
        },
        "c-card-responsive": {
          title: "반응형",
          description:
            "모바일 뷰포트에서는 콘텐츠를 위한 공간을 절약하기 위해 카드가 일반적으로 전체 너비를 차지합니다.",
        },
        "c-card-groups": {
          title: "카드 그룹",
          description:
            "여러 카드를 단일 콘텐츠 섹션 목록으로 그룹화할 수 있습니다.",
        },
      },
    },
    "c-carousel": {
      title: "캐러셀",
      description:
        "그룹화된 콘텐츠를 표시하는 데 사용되는 가로 스크롤 영역입니다.",
      checklist: {
        "c-carousel-navigation": {
          title: "탐색 컨트롤",
          description:
            "캐러셀은 터치 이벤트 대신 마우스로 작동하는 기기에서도 콘텐츠를 탐색할 수 있어야 합니다.",
        },
        "c-carousel-composition": {
          title: "항목 구성",
          description:
            "캐러셀 항목의 콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-carousel-item-size": {
          title: "항목 크기",
          description:
            "항목의 레이아웃은 다양한 유형의 콘텐츠를 지원할 수 있도록 유연해야 합니다. 모바일 기기의 경우, 스크롤 가능한 영역을 나타내기 위해 뷰포트에 맞지 않는 캐러셀 항목의 일부를 보여주도록 하세요.",
        },
        "c-carousel-touch": {
          title: "터치 탐색",
          description:
            "캐러셀 콘텐츠는 터치 이벤트를 지원하기 위해 스크롤 가능한 영역 안에 렌더링되어야 합니다.",
        },
        "c-carousel-responsive": {
          title: "반응형",
          description:
            "캐러셀 항목 레이아웃은 사용 가능한 공간에 따라 조정이 필요할 수 있습니다.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "키보드 탐색",
          description:
            "키보드와 보조 기술 사용자는 탐색 컨트롤을 클릭하지 않고도 캐러셀 콘텐츠를 탐색할 수 있어야 합니다.",
        },
      },
    },
    "c-checkbox": {
      title: "체크박스",
      description:
        "목록에서 하나 또는 여러 값을 선택하는 데 사용되는 폼 필드입니다.",
      checklist: {
        "c-checkbox-label": {
          title: "레이블",
          description:
            "체크박스 필드와 연결된 텍스트 레이블이 있어야 합니다. 레이블을 클릭해도 체크박스 선택이 되어야 합니다. 레이블이 페이지에 렌더링되지 않더라도 보조 기술은 여전히 이를 알려야 합니다.",
        },
        "c-checkbox-checked": {
          title: "체크 상태",
          description: "체크박스가 선택되고 폼 제출에 사용될 때 표시됩니다.",
        },
        "c-checkbox-error": {
          title: "오류 상태",
          description:
            "오류가 체크박스 필드와 관련있을 때 폼 유효성 검사를 위해 오류 상태를 사용하세요. 항상 다른 필드 색상과 함께 텍스트 오류를 사용하세요.",
        },
        "c-checkbox-disabled": {
          title: "비활성화 상태",
          description:
            "체크박스 상호작용을 방지하고 제출된 폼 값에서 해당 값을 제거하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-checkbox-indeterminate": {
          title: "중간 상태",
          description:
            "체크박스에 선택 가능한 하위 요소가 있고 일부만 선택되었을 때 시각적으로 표시합니다.",
        },
        "c-checkbox-group": {
          title: "체크박스 그룹",
          description:
            "체크박스는 동시에 여러 값을 처리하기 위해 그룹화될 수 있습니다.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "키보드 지원",
          description:
            "체크박스 선택은 키보드로 트리거되어야 합니다. 이를 위해 네이티브 요소를 사용하면 이러한 상호작용이 자동으로 제공됩니다.",
        },
      },
    },
    "c-divider": {
      title: "구분선",
      description: "시각적 콘텐츠 분리를 위한 요소",
      checklist: {
        "c-divider-direction": {
          title: "방향",
          description:
            "구분선은 수평 및 수직 콘텐츠 목록 모두를 분리해야 합니다.",
        },
        "c-divider-a11y-role": {
          title: "접근성 역할",
          description:
            "구분선이 레이아웃에서 장식적이지 않은 역할을 수행하는 경우, 보조 기술이 그 역할을 알려야 합니다.",
        },
      },
    },
    "c-dropdown": {
      title: "드롭다운",
      description: "사용자가 트리거할 수 있는 상황별 작업 목록입니다.",
      checklist: {
        "c-dropdown-composition": {
          title: "콘텐츠 구성",
          description:
            "드롭다운은 컨텍스트 메뉴, 제품 탐색 등 다양한 목적으로 사용될 수 있습니다. 콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-dropdown-hover": {
          title: "호버 트리거",
          description:
            "드롭다운은 호버 이벤트에서 콘텐츠를 표시하는 것을 지원해야 합니다. 키보드 사용자의 경우 트리거가 포커스되면 동일한 동작이 발생해야 합니다.",
        },
        "c-dropdown-positioning": {
          title: "동적 위치 지정",
          description:
            "드롭다운 콘텐츠는 화면에서 트리거 요소의 현재 위치를 기반으로 표시되어야 하며 항상 사용자에게 보여야 합니다.",
        },
        "c-dropdown-responsive": {
          title: "반응형",
          description:
            "드롭다운 콘텐츠가 모바일 기기에서 데스크톱과 동일한 방식으로 화면에 맞지 않는 경우 조정되어야 합니다.",
        },
        "c-dropdown-a11y-focus": {
          title: "포커스 트래핑",
          description:
            "드롭다운 콘텐츠가 열리면 포커스 링은 콘텐츠 영역 안으로 이동하고 닫힐 때 트리거 요소로 돌아가야 합니다.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "키보드 탐색",
          description:
            "드롭다운은 키보드와 보조 기술에 접근 가능해야 합니다. 사용자는 별도의 닫기 작업을 사용하거나 콘텐츠 영역 밖으로 탭하여 드롭다운을 닫을 수 있어야 합니다.",
        },
      },
    },
    "c-icon": {
      title: "아이콘",
      description: "SVG 자산의 모양을 제어하기 위한 래퍼",
      checklist: {
        "c-icon-colors": {
          title: "색상",
          description:
            "아이콘은 디자인 시스템 토큰에서 사용할 수 있는 색상 값을 지원해야 합니다. 또한 부모 요소로부터 색상을 상속받는 것을 지원하는 것이 좋은 방법입니다.",
        },
        "c-icon-sizes": {
          title: "크기",
          description:
            "아이콘은 제품 전반에 걸쳐 일관된 경험을 제공하기 위해 여러 가지 미리 정의된 크기를 가져야 합니다. 텍스트 크기와 맞추기 위해 타이포그래피 쌍을 이 크기 값에 사용할 수 있습니다.",
        },
        "c-icon-a11y-decoration": {
          title: "상호작용",
          description:
            "아이콘은 대부분 장식적 요소로 사용됩니다. 아이콘이 상호작용 가능하도록 의도된 경우, 그 기능은 버튼, 링크 또는 다른 상호작용 컴포넌트를 사용하여 포함되어야 합니다.",
        },
      },
    },
    "c-image": {
      title: "이미지",
      description: "이미지를 표시하고 동작을 제어하기 위한 유틸리티입니다.",
      checklist: {
        "c-image-sizes": {
          title: "크기",
          description:
            "이미지는 지원되는 크기 측면에서 유연해야 합니다. 너비와 높이를 지원하는 것 외에도, 부모 요소를 기반으로 비율을 동적으로 조정하기 위한 종횡비 지원을 추가하세요.",
        },
        "c-image-fallback": {
          title: "이미지 대체",
          description:
            "이미지 URL이 잘못되었거나 정의되지 않은 경우 대체 요소를 표시합니다. 이는 배경이 있는 빈 상자, 아이콘 또는 정적 플레이스홀더 이미지가 될 수 있습니다.",
        },
        "c-image-density": {
          title: "화면 밀도 지원",
          description:
            "화면 밀도에 따라 다양한 크기의 여러 이미지 자산을 로드하고 사용자에게 적절한 것을 제공하는 것을 지원해야 합니다.",
        },
        "c-image-a11y-alt": {
          title: "대체 텍스트",
          description:
            "이미지가 장식용이 아닌 경우, 이미지 내용을 설명하는 대체 텍스트를 제공해야 합니다.",
        },
      },
    },
    "c-link": {
      title: "링크",
      description:
        "텍스트 단락 내에서 탐색에 사용되는 상호작용 텍스트 요소입니다.",
      checklist: {
        "c-link-icon": {
          title: "아이콘 지원",
          description:
            "링크의 목적을 전달하기 위해 링크 옆에 아이콘을 사용할 수 있습니다. 텍스트 레이블 없이 링크 내에서 아이콘을 사용해서는 안 됩니다.",
        },
        "c-link-colors": {
          title: "색상",
          description:
            "링크는 제품에서 다양한 역할을 수행할 수 있으며, 각 역할에 대해 미리 정의된 색상을 사용하면 사용자가 의미를 이해하는 데 도움이 됩니다. 링크는 텍스트 요소이므로 다른 텍스트 내용과 마찬가지로 부모 요소에서 정의된 색상을 자동으로 상속받을 수 있어야 합니다.",
        },
        "c-link-disabled": {
          title: "비활성화 상태",
          description:
            "링크가 상호작용할 수 없음을 시각적으로 보여주고 누르는 것을 제한합니다.",
        },
        "c-link-font-inheritance": {
          title: "폰트 상속",
          description:
            "링크는 텍스트 요소의 일부로 사용될 때 타이포그래피 스타일을 상속받을 수 있어야 합니다.",
        },
        "c-link-multiline": {
          title: "여러 줄 표시",
          description:
            "텍스트 단락 내에서 사용될 때 링크는 텍스트 흐름을 깨지 않고 여러 줄 표시를 지원해야 합니다.",
        },
        "c-link-a11y-role": {
          title: "접근성 역할",
          description:
            "링크는 전달된 속성을 기반으로 버튼 또는 링크 접근성 역할을 자동으로 해결하고 올바르게 알려야 합니다.",
        },
      },
    },
    "c-list": {
      title: "목록",
      description: "목록은 항목 목록을 표시하는 데 사용됩니다.",
      checklist: {
        "c-list-order": {
          title: "순서",
          description:
            "목록 항목은 글머리 기호, 번호 매기기 및 기타 스타일과 순서 유형을 사용할 수 있습니다.",
        },
        "c-list-composition": {
          title: "콘텐츠 구성",
          description:
            "목록 항목 콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-list-a11y-role": {
          title: "접근성 역할",
          description:
            "보조 기술은 올바른 역할과 표시된 항목 수로 목록을 알려야 합니다.",
        },
      },
    },
    "c-loading-indicator": {
      title: "로딩 표시기",
      description:
        "프로세스가 얼마나 걸릴지 알려주지 않고 진행 상황을 전달하는 애니메이션 요소입니다.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "색상",
          description:
            "로딩 표시기는 다양한 역할을 가진 요소 내에서 사용될 수 있으며 해당 색상 구성표를 따라야 합니다.",
        },
        "c-loading-indicators-sizes": {
          title: "크기",
          description:
            "로딩 표시기는 렌더링되는 영역의 크기에 따라 여러 크기를 제공할 수 있습니다.",
        },
        "c-loading-indicator-time": {
          title: "로딩 시간",
          description:
            "일부 경우에는 대기 시간을 결정할 수 없습니다. 로딩 표시기는 로딩이 완료되거나 오류가 발생할 때까지 표시되어야 합니다. 다른 경우에는 로딩이 완료될 때까지 남은 시간을 표시하는 것이 더 좋습니다.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "모션 감소",
          description:
            "로딩 표시기는 시스템 모션 설정과 동기화되어야 하며 모션 감소 설정이 켜져 있을 때 애니메이션 속도를 줄여야 합니다.",
        },
        "c-loading-indicator-a11y-label": {
          title: "접근성 레이블",
          description:
            "로딩 표시기가 독립적으로 사용되는 경우, 로딩 중인 콘텐츠 영역에 대한 접근성 레이블을 제공하세요.",
        },
      },
    },
    "c-modal": {
      title: "모달",
      description:
        "중요한 정보나 실행 가능한 콘텐츠를 제공하기 위해 메인 콘텐츠 앞에 나타나는 컨테이너입니다.",
      checklist: {
        "c-modal-composition": {
          title: "콘텐츠 구성",
          description:
            "메인 콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-modal-actions": {
          title: "보조 작업",
          description:
            "모달의 콘텐츠가 실행 가능할 수 있으므로 작업 요소를 위한 영역이 필수적입니다. 이 영역은 일반적으로 모달 컨테이너의 하단에 위치합니다.",
        },
        "c-modal-close": {
          title: "닫기 작업",
          description:
            "모달은 열려 있을 때 콘텐츠를 차단하므로 간단한 닫기 방법을 제공해야 합니다. 이는 별도의 닫기 버튼이나 보조 작업 중 하나일 수 있습니다.",
        },
        "c-modal-positioning": {
          title: "위치 지정",
          description:
            "모달은 화면 중앙에 위치하거나 화면 양쪽에서 슬라이딩 시트로 표시될 수 있습니다.",
        },
        "c-modal-sizes": {
          title: "크기",
          description:
            "표시하는 콘텐츠에 따라 모달의 높이와 너비를 변경하는 것을 지원하세요.",
        },
        "c-modal-a11y-focus": {
          title: "포커스 트래핑",
          description:
            "모달이 열릴 때 사용자 포커스는 첫 번째 포커스 가능한 요소로 이동하고 그 안에 갇혀 있어야 합니다. 모달이 닫힐 때 포커스는 마지막 활성 요소로 돌아가야 합니다.",
        },
        "c-modal-a11y-keyboard": {
          title: "키보드 탐색",
          description:
            "Esc 키를 눌러 모달을 닫을 수 있어야 하며, 모달 컨테이너 내의 모든 포커스 가능한 요소는 키보드 탐색으로 접근할 수 있어야 합니다.",
        },
        "c-modal-a11y-labels": {
          title: "제목과 부제목 레이블링",
          description:
            "모달은 올바른 접근성 역할을 사용해야 하며, 제목과 부제목 요소로 레이블이 지정되어야 합니다. 눈에 보이는 제목이나 부제목이 없는 경우 접근성 레이블을 대신 사용할 수 있습니다.",
        },
      },
    },
    "c-pagination": {
      title: "페이지네이션",
      description: "페이지네이션은 페이지 범위에서 선택을 가능하게 합니다.",
      checklist: {
        "c-pagination-selected": {
          title: "선택된 페이지 상태",
          description:
            "목록에서 선택된 페이지를 시각적으로 강조하고 상호작용할 수 없게 만듭니다.",
        },
        "c-pagination-ranges": {
          title: "페이지 표시 범위",
          description:
            "선택된 페이지 주변에 렌더링되는 페이지의 범위를 정의합니다. 이는 제한된 수의 페이지만 렌더링하지만 사용자가 한 번에 1페이지씩 이동하는 것보다 빠르게 탐색할 수 있게 해줍니다.",
        },
        "c-pagination-amount": {
          title: "페이지당 항목 수",
          description:
            "페이지에 표시되는 페이지네이션된 항목의 수를 선택할 수 있는 옵션을 제공합니다.",
        },
        "c-pagination-indeterminate": {
          title: "불확정 페이지 수",
          description:
            "사용 가능한 전체 페이지 수를 미리 알 수 없는 경우, 페이지를 개별적으로 탐색하기 위한 다른 표시 모드를 사용하세요.",
        },
        "c-pagination-a11y-label": {
          title: "전체 페이지 레이블 알림",
          description:
            "페이지네이션은 보조 기술을 위해 단순히 숫자만 알리는 대신 각 페이지에 대한 명확하고 동적인 레이블을 제공해야 합니다.",
        },
        "c-pagination-a11y-state": {
          title: "상태 알림",
          description:
            "페이지네이션은 선택된 페이지가 포커스될 때 이를 알려야 합니다.",
        },
      },
    },
    "c-progress": {
      title: "진행 막대",
      description:
        "오래 걸리거나 여러 단계로 구성된 작업의 진행 상황을 표시하는 막대입니다.",
      checklist: {
        "c-progress-label": {
          title: "레이블",
          description:
            "진행 막대가 담당하는 내용을 설명하는 레이블을 시각적으로 표시하기 위한 지원을 제공하세요.",
        },
        "c-progress-sizes": {
          title: "크기",
          description:
            "로딩 표시기는 렌더링되는 영역의 크기에 따라 여러 크기를 제공할 수 있습니다.",
        },
        "c-progress-duration": {
          title: "지속 시간",
          description:
            "일부 경우에는 대기 시간을 결정할 수 없습니다. 로딩 표시기는 로딩이 완료되거나 오류가 발생할 때까지 표시되어야 합니다. 다른 경우에는 로딩이 완료될 때까지 남은 시간을 표시하는 것이 더 좋습니다.",
        },
        "c-progress-a11y-label": {
          title: "접근성 레이블",
          description:
            "인터페이스에 레이블을 표시할 수 없는 경우를 위해 접근성 레이블을 추가하기 위한 지원을 제공하세요.",
        },
      },
    },
    "c-radio": {
      title: "라디오 버튼",
      description:
        "라디오는 목록에서 하나의 옵션을 선택하는 데 사용되는 폼 요소입니다.",
      checklist: {
        "c-radio-label": {
          title: "레이블",
          description:
            "라디오 필드와 연결된 텍스트 레이블이 있어야 합니다. 레이블을 클릭해도 체크박스 선택이 되어야 합니다. 레이블이 페이지에 렌더링되지 않더라도 보조 기술은 여전히 이를 알려야 합니다.",
        },
        "c-radio-checked": {
          title: "체크 상태",
          description: "라디오가 선택되고 폼 제출에 사용될 때 표시됩니다.",
        },
        "c-radio-error": {
          title: "오류 상태",
          description:
            "오류가 라디오 필드와 관련있을 때 폼 유효성 검사를 위해 오류 상태를 사용하세요. 항상 다른 필드 색상과 함께 텍스트 오류를 사용하세요.",
        },
        "c-radio-disabled": {
          title: "비활성화 상태",
          description:
            "라디오 상호작용을 방지하고 제출된 폼 값에서 해당 값을 제거하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-radio-group": {
          title: "라디오 그룹",
          description:
            "라디오 버튼은 라디오 버튼 중 하나가 체크된 후 선택이 잠기는 것을 피하기 위해 항상 그룹으로 사용됩니다.",
        },
        "c-radio-a11y-keyboard": {
          title: "키보드 지원",
          description:
            "라디오 선택은 키보드로 트리거되어야 합니다. 이를 위해 네이티브 요소를 사용하면 이러한 상호작용이 자동으로 제공됩니다.",
        },
      },
    },
    "c-select": {
      title: "선택",
      description: "선택은 옵션 목록에서 단일 값을 선택할 수 있게 해줍니다.",
      checklist: {
        "c-select-label": {
          title: "레이블",
          description:
            "선택 필드와 연결된 텍스트 레이블은 사용자에게 추가 컨텍스트를 제공할 수 있습니다. 레이블을 클릭하면 선택 드롭다운도 트리거되어야 합니다.",
        },
        "c-select-error": {
          title: "오류 상태",
          description:
            "오류가 선택에만 관련된 경우 폼 유효성 검사를 위해 오류 상태를 사용하세요. 더 나은 접근성을 위해 추가 오류 아이콘을 표시하세요.",
        },
        "c-select-disabled": {
          title: "비활성화 상태",
          description:
            "선택 상호작용을 방지하고 제출된 폼 값에서 해당 값을 제거하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-select-placeholder": {
          title: "플레이스홀더",
          description:
            "값이 선택되지 않았을 때 플레이스홀더 값을 표시합니다. 사용자가 선택 값을 기본값으로 재설정할 수 있도록 동일한 플레이스홀더 값을 사용할 수 있습니다.",
        },
        "c-select-helper": {
          title: "도움말 텍스트",
          description:
            "사용자에게 선택의 목적과 선택에 대한 요구사항에 대한 추가 컨텍스트를 제공하세요.",
        },
        "c-select-icon": {
          title: "아이콘 지원",
          description:
            "필드의 시작 부분에 아이콘을 표시하는 영역을 추가하여 컴포넌트로서의 선택 목적이나 선택된 값을 전달하세요.",
        },
        "c-select-prefix": {
          title: "접두사",
          description:
            "사용자에게 선택을 더 문맥적으로 만들기 위한 사용자 정의 콘텐츠 영역을 추가하세요. 예를 들어, 국가 코드 선택에서 국가 국기를 표시할 수 있습니다.",
        },
        "c-select-sizes": {
          title: "크기",
          description:
            "선택이 사용될 위치에 따라 여러 크기로 제공될 수 있습니다. 예를 들어, 애플리케이션의 밀집된 영역에는 작은 크기를 사용할 수 있습니다.",
        },
        "c-select-a11y-label": {
          title: "접근성 레이블",
          description:
            "선택에 대한 시각적 텍스트 레이블을 제공하지 않는 경우, 컴포넌트의 목적을 설명하는 접근성 레이블을 반드시 제공하세요.",
        },
      },
    },
    "c-skeleton": {
      title: "스켈레톤",
      description:
        "데이터가 로딩되는 동안 페이지 요소를 대체하는 플레이스홀더입니다.",
      checklist: {
        "c-skeleton-sizes": {
          title: "크기",
          description:
            "스켈레톤은 데이터가 로드된 후 불필요한 레이아웃 이동을 피하기 위해 디자인 시스템에서 사용 가능한 다양한 크기의 컴포넌트와 일치할 수 있어야 합니다.",
        },
        "c-skeleton-shapes": {
          title: "형태",
          description:
            "스켈레톤은 로딩 상태를 실제 컴포넌트의 레이아웃과 일치시키기 위해 디자인 시스템에서 사용 가능한 다양한 형태의 컴포넌트와 일치할 수 있어야 합니다.",
        },
        "c-skeleton-composition": {
          title: "구성",
          description:
            "간단한 스켈레톤을 더 고급 레이아웃으로 구성할 수 있습니다. 애플리케이션 인터페이스를 스켈레톤과 1:1로 매핑할 필요는 없습니다.",
        },
        "c-skeleton-a11y-motion": {
          title: "모션 감소",
          description:
            "모션 감소 사용자 설정을 위해 애니메이션을 줄이거나 완전히 제거하세요.",
        },
      },
    },
    "c-switch": {
      title: "스위치",
      description: "단일 항목의 상태를 즉시 변경하기 위한 토글입니다.",
      checklist: {
        "c-switch-label": {
          title: "레이블",
          description:
            "스위치와 연결된 텍스트 레이블이 있어야 합니다. 레이블을 클릭해도 스위치 선택이 되어야 합니다. 레이블이 페이지에 렌더링되지 않더라도 보조 기술은 여전히 이를 알려야 합니다.",
        },
        "c-switch-checked": {
          title: "체크 상태",
          description:
            "스위치가 선택되고 기본 기능이 활성화될 때 표시됩니다. 스위치는 종종 선택된 후 데이터를 즉시 업데이트하는 데 사용됩니다.",
        },
        "c-switch-disabled": {
          title: "비활성화 상태",
          description:
            "스위치 상호작용을 방지하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-switch-a11y-keyboard": {
          title: "키보드 탐색",
          description:
            "스위치 선택은 키보드로 트리거되어야 합니다. 이를 위해 네이티브 요소를 사용하면 이러한 상호작용이 자동으로 제공됩니다.",
        },
        "c-switch-a11y-label": {
          title: "접근성 레이블",
          description:
            "스위치에 대한 시각적 텍스트 레이블을 제공하지 않는 경우, 컴포넌트의 목적을 설명하는 접근성 레이블을 반드시 제공하세요.",
        },
      },
    },
    "c-tabs": {
      title: "탭",
      description: "여러 페이지나 콘텐츠 섹션 간의 탐색입니다.",
      checklist: {
        "c-tabs-composition": {
          title: "콘텐츠 구성",
          description:
            "콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-tabs-variants": {
          title: "변형",
          description:
            "다양한 렌더링 맥락을 지원하기 위해 탭은 여러 변형을 지원할 수 있습니다. 예를 들어, 페이지에서 직접 사용될 때는 알약 형태로 렌더링되고 카드 내부에서 렌더링될 때는 밑줄 변형을 사용할 수 있습니다.",
        },
        "c-tabs-selected": {
          title: "선택 상태",
          description:
            "탭은 항상 패널 중 하나의 콘텐츠를 표시하므로, 탭 트리거 중 하나는 항상 선택되어 시각적으로 강조되어야 합니다.",
        },
        "c-tabs-disabled": {
          title: "비활성화 상태",
          description:
            "사용자가 특정 탭 패널로 전환하는 것을 방지하기 위해 탭 트리거를 비활성화할 수 있습니다.",
        },
        "c-tabs-icon": {
          title: "아이콘 지원",
          description:
            "각 탭의 의미를 더 잘 설명하기 위해 탭 트리거 텍스트 옆에 아이콘을 표시할 수 있습니다.",
        },
        "c-tabs-equal": {
          title: "동일 너비 레이아웃",
          description:
            "부모 컨테이너의 전체 너비를 차지하도록 사용될 때, 탭 트리거는 동일한 수평 공간을 차지하도록 늘어날 수 있습니다.",
        },
        "c-tabs-a11y-keyboard": {
          title: "키보드 지원",
          description:
            "키보드를 사용하여 탭과 상호작용할 때는 화살표 탐색을 지원하여 이전 및 다음 패널 간에 전환할 수 있어야 합니다. Home과 End 버튼도 각각 첫 번째와 마지막 패널로 선택을 이동해야 합니다.",
        },
      },
    },
    "c-text-area": {
      title: "텍스트 영역",
      description: "여러 줄의 텍스트를 입력하고 편집하기 위한 폼 필드입니다.",
      checklist: {
        "c-text-area-label": {
          title: "레이블",
          description:
            "텍스트 영역과 연결된 텍스트 레이블은 사용자에게 추가 컨텍스트를 제공할 수 있습니다. 레이블을 클릭하면 필드로 포커스가 이동해야 합니다.",
        },
        "c-text-area-error": {
          title: "오류 상태",
          description:
            "오류가 텍스트 영역에만 관련된 경우 폼 유효성 검사를 위해 오류 상태를 사용하세요.",
        },
        "c-text-area-disabled": {
          title: "비활성화 상태",
          description:
            "텍스트 영역 상호작용을 방지하고 제출된 폼 값에서 해당 값을 제거하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-text-area-placeholder": {
          title: "플레이스홀더",
          description:
            "텍스트 영역 값이 비어 있을 때 플레이스홀더 값을 표시합니다. 레이블 대신 사용되지 않도록 주의하세요.",
        },
        "c-text-area-helper": {
          title: "도움말 텍스트",
          description:
            "사용자에게 텍스트 영역의 목적과 예상되는 값에 대한 요구사항에 대한 추가 컨텍스트를 제공하세요.",
        },
        "c-text-area-sizes": {
          title: "크기",
          description:
            "텍스트 영역이 사용될 위치에 따라 여러 크기로 제공될 수 있습니다. 예를 들어, 마케팅 페이지의 폼에는 큰 크기를 사용할 수 있습니다.",
        },
        "c-text-area-a11y-label": {
          title: "접근성 레이블",
          description:
            "텍스트 영역에 대한 시각적 텍스트 레이블을 제공하지 않는 경우, 컴포넌트의 목적을 설명하는 접근성 레이블을 반드시 제공하세요.",
        },
      },
    },
    "c-text-field": {
      title: "텍스트 필드",
      description: "한 줄의 텍스트를 입력하고 편집하기 위한 폼 필드입니다.",
      checklist: {
        "c-text-field-label": {
          title: "레이블",
          description:
            "텍스트 필드와 연결된 텍스트 레이블은 사용자에게 추가 컨텍스트를 제공할 수 있습니다. 레이블을 클릭하면 필드로 포커스가 이동해야 합니다.",
        },
        "c-text-field-error": {
          title: "오류 상태",
          description:
            "오류가 텍스트 필드에만 관련된 경우 폼 유효성 검사를 위해 오류 상태를 사용하세요.",
        },
        "c-text-field-disabled": {
          title: "비활성화 상태",
          description:
            "텍스트 필드 상호작용을 방지하고 제출된 폼 값에서 해당 값을 제거하기 위해 비활성화 상태를 사용하세요.",
        },
        "c-text-field-placeholder": {
          title: "플레이스홀더",
          description:
            "텍스트 필드 값이 비어 있을 때 플레이스홀더 값을 표시합니다. 레이블 대신 사용되지 않도록 주의하세요.",
        },
        "c-text-field-helper": {
          title: "도움말 텍스트",
          description:
            "사용자에게 텍스트 필드의 목적과 예상되는 값에 대한 요구사항에 대한 추가 컨텍스트를 제공하세요.",
        },
        "c-text-field-icon": {
          title: "아이콘 지원",
          description:
            "필드의 시작 부분에 아이콘을 표시하는 영역을 추가하여 컴포넌트로서의 텍스트 필드의 목적이나 필드 값을 전달하세요.",
        },
        "c-text-field-affix": {
          title: "접두사/접미사",
          description:
            "사용자에게 선택을 더 문맥적으로 만들기 위한 사용자 정의 콘텐츠 영역을 추가하세요. 예를 들어, 신용카드 번호를 위한 텍스트 필드에 결제 제공업체를 표시할 수 있습니다.",
        },
        "c-text-field-sizes": {
          title: "크기",
          description:
            "텍스트 필드가 사용될 위치에 따라 여러 크기로 제공될 수 있습니다. 예를 들어, 마케팅 페이지의 폼에는 큰 크기를 사용할 수 있습니다.",
        },
        "c-text-field-a11y-label": {
          title: "접근성 레이블",
          description:
            "텍스트 필드에 대한 시각적 텍스트 레이블을 제공하지 않는 경우, 컴포넌트의 목적을 설명하는 접근성 레이블을 반드시 제공하세요.",
        },
      },
    },
    "c-toast": {
      title: "토스트",
      description: "페이지 콘텐츠 위에 표시되는 알림 메시지나 정보입니다.",
      checklist: {
        "c-toast-composition": {
          title: "콘텐츠 구성",
          description:
            "콘텐츠 영역은 다른 컴포넌트를 포함한 다양한 유형의 콘텐츠를 지원할 수 있을 만큼 유연해야 합니다.",
        },
        "c-toast-colors": {
          title: "색상",
          description:
            "토스트에 표시되는 알림의 역할에 따라 여러 색상으로 제공될 수 있습니다. 예를 들어, 오류 알림의 경우 빨간색으로 표시될 수 있습니다.",
        },
        "c-toast-icon": {
          title: "아이콘 지원",
          description:
            "알림의 목적을 전달하기 위해 토스트의 시작 부분에 아이콘을 표시하는 영역을 추가하세요.",
        },
        "c-toast-timeout": {
          title: "시간 제한",
          description:
            "토스트는 일반적으로 시간 제한 후에 사라집니다. 사용자가 메시지를 읽을 수 있도록 충분히 긴 시간 제한을 제공하세요. 시간 제한이 없는 경우 알림을 닫을 수 있는 버튼을 제공하세요.",
        },
        "c-toast-stacking": {
          title: "쌓기",
          description:
            "여러 토스트가 트리거된 경우, 화면을 어지럽히지 않도록 서로 위에 쌓아서 표시하세요.",
        },
        "c-toast-action": {
          title: "보조 작업",
          description:
            "알림의 작업은 알림 목적에 맞는 맥락이어야 합니다. 예를 들어, 콘텐츠 삭제에 대해 사용자에게 알리는 경우, 작업 요소를 통해 이 작업을 실행 취소할 수 있습니다.",
        },
        "c-toast-a11y-focus": {
          title: "포커스 관리",
          description:
            "토스트에 작업이 있는 경우, 키보드로 포커스하여 트리거할 수 있어야 합니다. 포커스가 토스트 컨테이너 내부에 있는 동안에는 시간 제한이 비활성화되어야 합니다.",
        },
        "c-toast-a11y-motion": {
          title: "모션 감소",
          description:
            "모션 감소 사용자 설정을 위해 애니메이션을 줄이거나 완전히 제거하세요.",
        },
      },
    },
    "c-tooltip": {
      title: "툴팁",
      description: "요소 호버나 포커스 시 표시되는 맥락적 텍스트 정보입니다.",
      checklist: {
        "c-tooltip-positioning": {
          title: "위치 지정",
          description:
            "툴팁의 기본 위치가 뷰포트에 맞지 않을 때는 동적으로 다른 값으로 위치를 전환하도록 하세요.",
        },
        "c-tooltip-timeout": {
          title: "시간 제한",
          description:
            "사용자가 화면에서 커서를 움직이는 동안 열리지 않도록 툴팁을 열기 전에 잠시 기다리세요.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "키보드 지원",
          description:
            "툴팁은 마우스 호버뿐만 아니라 트리거 요소에 포커스될 때도 접근 가능해야 합니다.",
        },
      },
    },
  },
};
