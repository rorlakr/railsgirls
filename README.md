# 레일스 걸스 가이드

>우리의 목표는 여성들에게 기술을 이해하는 툴을 제공하는 것입니다. 레일스 걸스 행사는 여러분에게 처음으로 인터넷을 만드는 경헝을 제공하여 목표를 달성합니다.

레일스 걸스는 헬싱키에서 2010년 말 설립하였습니다. 본래 일회성 행사였기때문에 세계 각지에 레일스 걸스 지부가 많이 생길지 생각하지 못했습니다. 레일스 걸스 가이드는 여러분이 시작하는데 필요한 내용을 담아 두었습니다.

여기의 교재와 강의를 활용해서 여러분이 사는 도시나 회사에서 또는 집에서 워크샵을 열어도 됩니다! 레일스 걸스에 대해서는 http://railsgirls.com 를 들려보세요.

## 가볍게 시작하기

http://guides.railsgirls.com 을 열거나 소스 저장소를 클론하고 [지킬 jekyll](https://github.com/mojombo/jekyll)을 설치 및 실행합니다.

### 지킬 jekyll 설치

```
$ cd railsgirls.github.io
```

```
$ bundle install
```

### 파이그먼츠 Pygments 와 코드 하이라이팅

문맥에 따라 코드를 색깔로 구별하기 위해 [파이그먼츠 pygments](http://pygments.org/) 라이브러리를 사용합니다. 아직 설치하지 않았다면 아래와 같이 하이라이트 섹션을 볼 수 없습니다:

```
{% highlight %}
{% endhighlight %}
```

코드 블럭을 직접 수정하지 않는 경우 설치하지 않아도 됩니다. 설치하려면  "파이그먼츠 Pygments" 섹션에서 [설치 방법](http://jekyllrb.com/docs/installation/)을 읽을세요.

### 지킬 jekyll 실행

```
$ bundle exec jekyll server --watch
```

### Styling

Wrap keyboard shortcuts with [kbd](https://www.w3.org/wiki/HTML/Elements/kbd) HTML tag.

To make posts consistent in style use `Ctrl+C` over `CTRL-c`/`ctrl+c`

```
To shut down the server you can hit <kbd>Ctrl</kbd>+<kbd>C</kbd>
```

### 문제가 생겼나요?

지킬이 생각대로 동작하지 않으면 몇가지 유용한 힌트를 찾아보세요: [이슈  503](https://github.com/mojombo/jekyll/issues/503)

## 가이드에 기여하기

가이드에 기여하려면 http://guides.railsgirls.com/contributing 을 읽으세요.

## 트위터

[@railsgirls](https://twitter.com/railsgirls)를 팔로우하고 업데이트를 확인하세요.

## 웹사이트와 블로그

http://railsgirls.com 는 레일스 걸스 운동에 대한 공식 웹사이트와 블로그입니다. 

## 메일링 리스트

레일스 걸스 행사에 대한 전세계 메일링 리스트는 http://groups.google.com/group/rails-girls-team 입니다.

## 기여하신 분

* 카리 사리렌 Karri Saarinen / [@karrisaarinen](https://twitter.com/karrisaarinen) / [github](http://github.com/ksaa)
* 린다 리우카스 Linda Liukas / [@lindaliukas](https://twitter.com/lindaliukas) / [github](http://github.com/lindaliukas)
* 베사 벤스케 Vesa Vänskä / [@vesan](https://twitter.com/vesan) / [github](http://github.com/vesan)
* 테렌스 리 Terence Lee / [@hone02](https://twitter.com/hone02) / [github](http://github.com/hone)

.. 그리고 여러 코치분들과 레일스 걸스를 잘 가꿔주는 사람들. 여러분도 참여해보세요!
