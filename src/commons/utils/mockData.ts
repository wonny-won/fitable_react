/********************************************************************
 * apply program : mento list
 ********************************************************************/
export const mentoLst:{
    [portfolio:string]:any[];
    resume:any[]
} = {
        portfolio:[
            {
                id: 1,
                name:'홍구리',
                language:'JS',
                company:'라프텔',
                position:'프론트엔드 개발',
                employmentYear:'주니어 (1 ~ 4 년차)',
                feedbackCount:47,
                appealDescription:'당신이 하고있는 고민, 이미 다 해봤습니다.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 2,
                name:'아멘',
                language:'Java',
                company:'카카오',
                position:'백엔드 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:34,
                appealDescription:'개발자라면 꼭! 해야하는 모든걸 알려드릴게요.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 3,
                name:'원두커피',
                language:'Python',
                company:'네이버',
                position:'풀스택 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:80,
                appealDescription:'잘 읽히는 포트폴리오가 궁금하신가요?',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 4,
                name:'개발너구리',
                language:'JS',
                company:'팀스톤',
                position:'프론트엔드 개발',
                employmentYear:'주니어 (1 ~ 4 년차)',
                feedbackCount:27,
                appealDescription:'행운의 너굴맨이 최선을 다해드려오.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 5,
                name:'쭈꾸미',
                language:'JS',
                company:'카카오 페이증권',
                position:'프론트엔드 개발',
                employmentYear:'미들 (5 ~ 8 년차)',
                feedbackCount:68,
                appealDescription:'당신만 모르는 클린코드의 비밀',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 6,
                name:'돌청바지',
                language:'Kotlin',
                company:'토스',
                position:'프론트엔드 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:67,
                appealDescription:'토스의 개발문화를 사랑하는 멘토입니다.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드 방향성']
            },
            {
                id: 7,
                name:'감전된다람쥐',
                company:'당근마켓',
                language:'Java',
                position:'백엔드 개발',
                employmentYear:'주니어 (1 ~ 4 년차)',
                feedbackCount:17,
                appealDescription:'작고 귀여운 내 포트폴리오가 간지나는 방법.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 8,
                name:'보보',
                language:'JS',
                company:'라인',
                position:'풀스택 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:77,
                appealDescription:'IT 대기업 출신의 포트폴리오 노하우',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 9,
                name:'쟤니',
                language:'JS',
                company:'와탭랩스',
                position:'프론트엔드 개발',
                employmentYear:'주니어 (1 ~ 4 년차)',
                feedbackCount:12,
                appealDescription:'주니어라면 꼭 알아야 할 포폴만들기',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 10,
                name:'오터',
                language:'Java',
                company:'라인',
                position:'백엔드 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:22,
                appealDescription:'백엔드 포트폴리오는 이래야 합니다.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 11,
                name:'쥐쥐',
                language:'Kotlin',
                company:'컬리마켓',
                position:'프론트엔드 개발',
                employmentYear:'시니어 (9 ~ 12 년차)',
                feedbackCount:57,
                appealDescription:'당신이 걷는 길, 제가 걸어왔던 길 입니다.',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            },
            {
                id: 12,
                name:'설탕노움정',
                language:'Python',
                company:'쿠팡',
                position:'풀스택 개발',
                employmentYear:'미들 (5 ~ 8 년차)',
                feedbackCount:39,
                appealDescription:'슈퍼 루키가 되고싶다면?',
                tag:['이직 준비','취업 준비','서류 합격','면접 대비','코드의 방향성']
            }
        ],
        resume:[]
    }

/********************************************************************
 * apply program : mento list
 ********************************************************************/
export const mentoInfo:any = {
    1:{
        id: 1,
        name:'홍구리',
        company:'라프텔',
        position:'프론트엔드 개발',
        employmentYear:'주니어 (1 ~ 4 년차)',
        feedbackCount:47,
        // 본문
        appealDescription:'당신이 하고있는 고민, 이미 다 해봤습니다.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:13,
                name:'냐옹이',
                star:5,
                desc:'이거슨 개쩌는 피드백..!'
            },
            {
                id:14,
                name:'',
                star:5,
                desc:''
            },
            {
                id:15,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    2:{
        id: 2,
        name:'아멘',
        company:'카카오',
        position:'백엔드 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:34,
        // 본문
        appealDescription:'개발자라면 꼭! 해야하는 모든걸 알려드릴게요.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:16,
                name:'',
                star:5,
                desc:''
            },
            {
                id:17,
                name:'',
                star:5,
                desc:''
            },
            {
                id:18,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    3:{
        id: 3, 
        name:'원두커피',
        company:'네이버',
        position:'풀스택 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:80,
        // 본문
        appealDescription:'잘 읽히는 포트폴리오가 궁금하신가요?',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:20,
                name:'',
                star:5,
                desc:''
            },
            {
                id:21,
                name:'',
                star:5,
                desc:''
            },
            {
                id:22,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    4:{
        id: 4,
        name:'개발너구리',
        company:'팀스톤',
        position:'프론트엔드 개발',
        employmentYear:'주니어 (1 ~ 4 년차)',
        feedbackCount:27,
        // 본문
        appealDescription:'행운의 너굴맨이 최선을 다해드려오.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:23,
                name:'',
                star:5,
                desc:''
            },
            {
                id:24,
                name:'',
                star:5,
                desc:''
            },
            {
                id:25,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    5:{
        id: 5,
        name:'쭈꾸미',
        company:'카카오 페이증권',
        position:'프론트엔드 개발',
        employmentYear:'미들 (5 ~ 8 년차)',
        feedbackCount:68,
        // 본문
        appealDescription:'당신만 모르는 클린코드의 비밀',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:26,
                name:'',
                star:5,
                desc:''
            },
            {
                id:27,
                name:'',
                star:5,
                desc:''
            },
            {
                id:28,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    6:{
        id: 6,
        name:'돌청바지',
        company:'토스',
        position:'프론트엔드 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:67,
        // 본문
        appealDescription:'토스의 개발문화를 사랑하는 멘토입니다.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id: 29,
                name:'',
                star:5,
                desc:''
            },
            {
                id:30,
                name:'',
                star:5,
                desc:''
            },
            {
                id:31,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    7:{
        id: 7,
        name:'감전된다람쥐',
        company:'당근마켓',
        position:'백엔드 개발',
        employmentYear:'주니어 (1 ~ 4 년차)',
        feedbackCount:17,
        // 본문
        appealDescription:'작고 귀여운 내 포트폴리오가 간지나는 방법.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id: 32,
                name:'',
                star:5,
                desc:''
            },
            {
                id:33,
                name:'',
                star:5,
                desc:''
            },
            {
                id:34,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    8:{
        id: 8,
        name:'보보',
        company:'라인',
        position:'풀스택 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:77,
        // 본문
        pappealDescription:'IT 대기업 출신의 포트폴리오 노하우',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:35,
                name:'',
                star:5,
                desc:''
            },
            {
                id:36,
                name:'',
                star:5,
                desc:''
            },
            {
                id:37,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    9:{
        id: 9,
        name:'쟤니',
        company:'와탭랩스',
        position:'프론트엔드 개발',
        employmentYear:'주니어 (1 ~ 4 년차)',
        feedbackCount:12,
        // 본문
        appealDescription:'주니어라면 꼭 알아야 할 포폴만들기',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:38,
                name:'',
                star:5,
                desc:''
            },
            {
                id:39,
                name:'',
                star:5,
                desc:''
            },
            {
                id:40,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    10:{
        id: 10,
        name:'오터',
        company:'라인',
        position:'백엔드 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:22,
        // 본문
        appealDescription:'백엔드 포트폴리오는 이래야 합니다.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:41,
                name:'',
                star:5,
                desc:''
            },
            {
                id:42,
                name:'',
                star:5,
                desc:''
            },
            {
                id:43,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    11:{
        id: 11,
        name:'쥐쥐',
        company:'컬리마켓',
        position:'프론트엔드 개발',
        employmentYear:'시니어 (9 ~ 12 년차)',
        feedbackCount:57,
        // 본문
        appealDescription:'당신이 걷는 길, 제가 걸어왔던 길 입니다.',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id:44,
                name:'',
                star:5,
                desc:''
            },
            {
                id:45,
                name:'',
                star:5,
                desc:''
            },
            {
                id:46,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
    12:{
        id: 12,
        name:'설탕노움정',
        company:'쿠팡',
        position:'풀스택 개발',
        employmentYear:'미들 (5 ~ 8 년차)',
        feedbackCount:39,
        // 본문
        appealDescription:'슈퍼 루키가 되고싶다면?',
        mentoAppeal:`
            안녕하세요!
            대기업 영업 직무를 때려치우고, 현재는 네이버에서 서비스 기획자로 재직 중인 주니어 기획자 비늘이라고 합니다.
            영업에서 서비스 기획, 정말 관련 없어 보이는 직무로 옮기는 과정이 쉽지만은 않았던 만큼, 제가 그 과정에서 배우고 깨달은 것들을 아낌 없이 알려드릴게요.
                
                
            1️⃣서비스 기획의 “핵심”, 확실히 알고 준비하자
                
            서비스 기획/PM 직무에 대한 관심도는 많이 높아졌지만, 아직 이 직무에 대해 쉽게 접할 수 있는 정보는 한정적입니다.
            실제로 커피챗을 하면서 서비스 기획을 하고 싶다고 말씀주시는 분들은 많았지만, 서비스를 ”기획“한다는게 구체적으로 어떤 것인지 여쭤보면 쉽사리 답하지 못하는 경우가 많았어요.
                
            커피챗을 통해서 서비스 기획이 무엇인지, 그 “핵심”은 무엇인지 확실하게 짚어드릴게요.
            이 “핵심”만 알면 막연하게 느껴졌던 프로젝트 진행, 포트폴리오 준비도 확실하게 방향성을 가지고 효율적으로 진행할 수 있을거에요.
                
                
            2️⃣나의 소중한 경험들, “이것”으로 제대로 어필하자
                
            서비스 기획 포트폴리오라고 해서 무조건 웹 만들고 앱만들고 이런 경험만 쓸 수 있는 것은 아니에요.
            어떤 활동을 했는지가 중요한 것이 아니라, 그 활동에서 여러분이 “이것”을 경험했는지가 중요합니다. (“이것”이 없다면 앱을 만들어 출시했다 해도 의미가 없답니다!)
                
            실제로 저는 서비스 기획과 전~혀 상관 없어보이는 저의 영업 직무 경험을 포트폴리오에 녹여내어 좋은 평가를 받았습니다.
            여러분도 포지션에 맞게 이미 가진 경험을 녹여내어 어필할 수 있도록 방법을 공유해드리겠습니다.
                
                
            3️⃣꼭 서비스 기획으로 시작하지 않(았)더라도, 커리어의 다양한 길을 고민해보자
                
            사실 서비스 기획자가 사람을 많이 뽑는 포지션은 아니에요. 커리어의 시작부터 서비스 기획으로 시작하면 좋겠지만, 세상은 내맘대로만 흘러가지는 않죠.
                
            학부생 분들이라면, 신입 서비스 기획자는 잘 안뽑는다는데, 붙을 때까지 이걸 도전해야 하나, 작은 규모의 회사라도 일단 들어가야하나, 아니면 다른 직무로라도 일단 취업부터 하고 봐야하나 고민되실 거에요.
            이미 경력이 있는 분들이라면, 내가 경력을 버리고 신입으로 직무 전환을 해야하나, 경력 살려서 옮기는 방법은 없나, 그런데 무엇을 어디서부터 시작해야할지 고민되실거구요.
                
            많은 커리어 고민 끝에, 생각지도 못했던 직무로 첫 취업을 하고, 그리고 또 다시 직무 전환을 하기까지. 제가 고민하고 경험했던 내용들을 얘기해드릴게요.
        `,
        feedbackFieldDesc:'이직 준비, 취업 준비, 면접 대비, 커리어 방향성',
        feedbackFieldTags:['IT기업','IT대기업','스타트업','개발자','네카라쿠배','신입취업','중고신입','이직','클린코드','개발방향성','성능최적화'],
        recommandfor:'수월한 이직이 가능한 국밥같은 개발자가 되고싶은데 잘 안되시는 분',
        notRecomandfor:'5년차 이상의 서비스 기획 경력을 보유하고 계신 분들',
        benefit:'신청자의 포트폴리오 상태 진단부터 앞으로의 방향성까지 가이드 해드립니다. 또한 더 나은 클린코드를 알려드리도록 하겠습니다.',
        review:[
            {
                id: 47,
                name:'',
                star:5,
                desc:''
            },
            {
                id:48,
                name:'',
                star:5,
                desc:''
            },
            {
                id:49,
                name:'',
                star:5,
                desc:''
            },
        ],
    },
}