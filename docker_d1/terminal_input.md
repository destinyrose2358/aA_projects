docker container run --name nginx -d -p 80:80 nginx

docker container run --name http -d -p 8080:80 httpd

docker container run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=apple mysql 

docker container run --name ubuntu -d ubuntu

docker container run --name quotes -d alpine /bin/sh -c "while :; do wget -qO- http://quotesondesign.com/wp-json/wp/v2/posts; printf '\n'; sleep 5s; done"

docker network create funrun

docker container run -d --net-alias wee --net funrun elasticsearch:2

docker container run -d --net-alias wee --net funrun elasticsearch:2

docker container run --name alpine --network funrun alpine nslookup wee

docker container run --name centos --network funrun centos curl -s wee:9200

docker container run --name DogsRGood \
  -d \
  --mount type=bind,source="$(pwd)",target="/bind_mount/" \
  nginx

docker container run --name psql-data -d \
  -v psql-data:/var/lib/postgresql/data \
  postgres:9.6.1

docker container run --name psql-data -d \
  -v psql-data:/var/lib/postgresql/data \
  postgres:9.6.2