FROM alpine:latest

RUN apk update && apk add \
	ca-certificates \
	groff \
	less \
	python \
    yarn \
	py-pip \
	&& rm -rf /var/cache/apk/* \
  && pip install pip --upgrade \
  && pip install awscli

WORKDIR "/data"

# Autorun aws
ENTRYPOINT ["aws", "yarn"]