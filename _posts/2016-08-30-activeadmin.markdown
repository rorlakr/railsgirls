---
layout: default
title: Adding a back-end with Active Admin
permalink: backend-with-active-admin
---

# Active Admin을 사용하여 백엔드 추가

*Created by [Rasmus Kjellberg](https://www.rasmuskjellberg.se)* 
*번역 [@corazzon](https://GitHub.com/corazzon)*

**이 가이드는 여러분이 이미 레일스 걸스 앱을 만들었다는 가정하에 쓰였습니다.** [**앱 개발 가이드는 여기를 참고하세요.**](../app)

Active Admin 은 루비온레일스의 관리자페이지를 생성해주는 플러그인입니다. 일반적인 비즈니스 애플리케이션 패턴을 추상화하여 개발자가 아주 적은 노력으로 아름답고 우아한 인터페이스를 간단하게 구현할 수 있도록 합니다. Active Admin 에 대해 [여기](http://activeadmin.info/)에서 자세한 설명을 볼 수 있습니다.

## "Active Admin" gem을 추가하세요.
`Gemfile` 파일을 열고 다음의 라인을 추가해 보세요.

{% highlight ruby %}
gem 'devise'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', github: 'activeadmin/inherited_resources'
{% endhighlight %}
그리고 다음 명령어를 실행해 주세요.
{% highlight sh %}
$ bundle install
{% endhighlight %}
gem 을 설치합니다.

번들러를 업데이트하고 설치 명령어를 실행합니다.
{% highlight sh %}
$ rails generate active_admin:install
{% endhighlight %}

설치 관리자는 Active Admin에서 사용되는 기본값을 구성하는 데 사용되는 초기화 프로그램과 app/admin으로 새 폴더를 만들어 모든 관리자 구성을 저장합니다.

DB 마이그레이트를 하고 서버를 실행하세요:
{% highlight sh %}
$ rake db:migrate
$ rails server
{% endhighlight %}

## 첫 관리자 계정을 생성하세요.
레일스 콘솔을 열어 `AdminUser` 모델을 통해 새로운 사용자를 생성하세요:
{% highlight sh %}
$ rails console
irb(main):001:0> AdminUser.create(:email => 'admin@railsgirls.com', :password => 'password123', :password_confirmation => 'password123')
{% endhighlight %}

생성이 되고 나면 다음과 같은 로그가 출력됩니다:
{% highlight sh %}
# (0.3ms)  begin transaction
# SQL (0.4ms)  INSERT INTO "admin_users" ...
# (0.9ms)  commit transaction
{% endhighlight %}

콘솔에서 빠져나갈 때는 간단하게 `exit` 명령어를 사용합니다:
{% highlight sh %}
irb(main):002:0> exit
{% endhighlight %}

## 관리자 페이지에 접속
다음의 주소로 접속하고 [http://localhost:3000/admin](http://localhost:3000/admin) 위에서 생성한 계정으로 로그인해보세요.

우와 어때요! 새로운 Active Admin 대시보드가 보일 거에요.

## 백엔드에 "Ideas" 추가하기
Active Admin에 `Idea` 모델을 등록하고 실행해 보세요:
{% highlight sh %}
$ rails generate active_admin:resource Idea
{% endhighlight %}
관리자 페이지를 새로고침 해보면 내비게이션에 [Ideas](http://localhost:3000/admin/ideas)가 보일 거에요.

*"Idea" 모델 처럼 어떤 모델이든 Active Admin에 등록이 가능합니다.*

### 강력한 파라메터 설정
모델을 변경할 때 **ActiveModel::ForbiddenAttributesError in Admin::IdeasController#update** 오류를 방지하기 위해서 [permit_params](http://activeadmin.info/docs/2-resource-customization.html) 메소드를 사용하여 변경할 수 있는 어트리뷰트를 정의해야 합니다:

`app/admin/idea.rb` 파일을 열고 `permit_params`에 `:name`, `:description`, `:picture`를 추가해 주세요:
{% highlight ruby %}
ActiveAdmin.register Idea do
  permit_params :name, :description, :picture
end
{% endhighlight %}

## 사용자를 위해 "new", "edit" 그리고 "destroy"를 제거
관리자가 아닌 사용자가 Idea 앱을 업데이트하는 것을 원하지 않는다면 route 파일을 업데이트하여 "index"및 "show"만 허용하도록 쉽게 수정할 수 있습니다. `config/route.rb`에 `only: [:show, :index]`만 추가하면 됩니다:
{% highlight ruby %}
resources :ideas, only: [:show, :index]
{% endhighlight %}

**프론트엔드 코드에서 깨진 링크 제거를 잊지 마세요:** `<%= link_to 'New Idea', new_idea_path %>`, `<%= link_to 'Edit', edit_idea_path(idea) %>`, `<%= link_to 'Destroy', idea, method: :delete, data: { confirm: 'Are you sure?' } %>`

보세요! 이제 Ideas를 새로운 관리자 패널에서 관리할 수 있습니다.

## What next?

* 블로그 나 댓글과 같은 다른 리소스를 관리자 페이지에 추가해 보세요.