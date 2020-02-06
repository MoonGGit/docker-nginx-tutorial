
FROM ubuntu:14.04       
#이미지 형식설정, <이미지 이름>:<태그>

RUN apt-get update
RUN apt-get install -y nginx
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN chown -R www-data:www-data /var/lib/nginx
#RUN으로 sh혹은 명령어를 실행

VOLUME ["/data", "/etc/nginx/site-enabled", "/var/log/nginx"]
#호스트와 공유할 디렉터리 목록

WORKDIR /etc/nginx
#다음 CMD또는 RUN에서 설정한 실행파일이 실행될 디렉터리

CMD ["nginx"]
#컨테이너가 시작되었을 때 실행할 파일 또는 sh

EXPOSE 80
EXPOSE 443
#호스트와 연결 할 포트

###################################################################
##############################메모#################################
###################################################################

ADD source dest
# 코드 복사


