---
layout: default
title: Show thumbnails when listing ideas
permalink: thumbnails
---

# 캐리어웨이브 젬으로 썸네일 미리보기 만들기

*Created by Miha Filej, [@mfilej](https://twitter.com/mfilej)*

__Coach__: 4단계에서 HTML의 이미지 가로 크기를 정하는 것을 설명하고 서버에 있는 이미지의 크기를 줄이는 것이 HTML의 크기를 정하는 것과 어떻게 다른지 설명하세요.

## *1.*Installing ImageMagick

* 맥 OS X: `brew install imagemagick` 실행합니다. 브류 명령을 실행하지 못하면 [홈브류를 여기서][in-homebrew] 설치할 수 있습니다.
* 윈도우즈: [이미지매직 인스톨러][im-win]를 내려받아서 실행합니다(use the first
  *download* link). 설치 마법사에서, 기존 바이너리 실행 파일을 설치하는
  체크박스를 꼭 선택합니다.
* 리눅스: 우분투 또는 데비안에서 `sudo apt-get install imagemagick`를 실행합니다. 
  다른 배포판에서는 `apt-get` 대신에 다른 패키지 매니저를 사용합니다.

  [im-win]: http://www.imagemagick.org/script/binary-releases.php?ImageMagick=vkv0r0at8sjl5qo91788rtuvs3#windows
  [in-homebrew]: http://mxcl.github.io/homebrew/

__Coach__: 이미지매직이 무엇인지 설명하고 앞서 설치한 다른 라이브러리나 젬과 어떻게 다른지 설명하세요.
used before?

프로젝트의 `Gemfile`을 수정합니다.

{% highlight ruby %}
gem 'mini_magick', '3.8.0'
{% endhighlight %}

을 캐리어 웨이브 젬 아래에 추가합니다.

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

터미널에서 아래와 같이 실행합니다:

{% highlight sh %}
bundle
{% endhighlight %}

## *2.*Telling our app to create thumbnails when an image is uploaded

`app/uploaders/picture_uploader.rb` 파일을 아래와 같이 수정합니다:

{% highlight ruby %}
  # include CarrierWave::MiniMagick
{% endhighlight %}

주석 `#` 표시를 지웁니다.

__Coach__: 코드의 주석에 대해 설명하세요.

주석을 지운 줄 아래에 다음과 같이 추가합니다:

{% highlight ruby %}
version :thumb do
  process :resize_to_fill => [50, 50]
end
{% endhighlight %}

이후로 업로드한 이미지는 크기를 줄어듭니다. 그러나 이미 올려둔 파일은 크기가 바뀌지 않기때문에 이미 등록한 아이디어에 다시 사진을 추가합니다.

## *3.*Displaying the thumbnails

업로드한 사진 크기가 줄어들었는지 확인하려면  
`app/views/ideas/index.html.erb`파일을 수정합니다. 

{% highlight erb %}
<%= image_tag idea.picture_url, width: '100%' if idea.picture.present? %>
{% endhighlight %}

를 아래와 같이 수정합니다.

{% highlight erb %}
<%= image_tag idea.picture_url(:thumb) if idea.picture.present? %>
{% endhighlight %}

아이디어 전체 목록에서 썸네일 이미지가 보이는지 
확인합니다.
