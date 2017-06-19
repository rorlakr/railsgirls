---
layout: default
title: Commenting functionality for the Rails Girls app
permalink: commenting
---
# 레일스 걸스 앱에 댓글 달기
*Created by Janika Liiv, [@janikaliiv](https://twitter.com/janikaliiv)*

*railsgirls* 애플리케이션의 아이디어에 댓글을 달겠습니다.

레일스을 설치하고 아디이어를 만드는 설명을 [이곳을](../app) 참고합니다.

## *1.*Create comment scaffold

댓글(comment)를 스캐폴드로 만듭니다. 댓글에는 댓글을 다는 사람의 이름, 댓글 내용, 댓글을 달 아이디어의 테이블에 대한 레퍼런스(`idea_id`)가 있습니다.
{% highlight sh %}
rails g scaffold comment user_name:string body:text idea_id:integer
{% endhighlight %}
실행결과 댓글 테이블을 새로 추가할 수 있도록 데이터베이스 마이그레이션 파일을 생성합니다. 마이그레이션은 아래와 같이 실행합니다.
{% highlight sh %}
rake db:migrate
{% endhighlight %}

## *2.*Add relations to models

레일스에게 객체(아디어와 댓글)의 관계를 알려주어야 합니다.
아이디어 하나에 댓글은 여러개 달 수 있기때문에 아이디어 모델은 객체 관계를 알아야 합니다.
app/models/idea.rb 파일을 수정합니다. 
{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}
아래에 다음을 추가합니다.
{% highlight ruby %}
has_many :comments
{% endhighlight %}

댓글은 아이디어가 필요합니다. `app/models/comment.rb` 파일을 수정합니다.
{% highlight ruby %}
class Comment < ActiveRecord::Base
{% endhighlight %}

아래에 다음과 같이 추가합니다.
{% highlight ruby %}
belongs_to :idea
{% endhighlight %}

## *3.*Render the comment form and existing comments

app/views/ideas/show.html.erb 파일을 수정합니다. 
{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

이미지 태그 아래에 다음과 같이 추가합니다.
{% highlight erb %}
<h3>Comments</h3>
<% @comments.each do |comment| %>
  <div>
    <strong><%= comment.user_name %></strong>
    <br>
    <p><%= comment.body %></p>
    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>
  </div>
<% end %>
<%= render partial: 'comments/form', locals: { comment: @comment } %>
{% endhighlight %}

`app/controllers/ideas_controller.rb` 파일을 수정합니다. show 액션 아래에 
{% highlight ruby %}
@comments = @idea.comments.all
@comment = @idea.comments.build
{% endhighlight %}

`app/views/comments/_form.html.erb` 파일을 수정합니다.
{% highlight erb %}
  <div class="field">
    <%= f.label :body %><br>
    <%= f.text_area :body %>
  </div>
{% endhighlight %}

아래에 다음과 같이 추가합니다.
{% highlight erb %}
<%= f.hidden_field :idea_id %>
{% endhighlight %}

그리고 아래의 줄을 지웁니다.
{% highlight erb %}
<div class="field">
  <%= f.label :idea_id %><br>
  <%= f.number_field :idea_id %>
</div>
{% endhighlight %}

끝났습니다. 아이디어 목록에서 하나를 클릭해서 보면 댓글을 새로 달 수 있는 폼이 보이고 이미 달아둔 댓글에는 삭제 버튼이 보입니다.
