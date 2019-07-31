
function HostModel(title, detail, className, mainIcon, warning, icon, text) {
    this.title = title;
    this.detail = detail;
    this.className = className;
    this.mainIcon = mainIcon;
    this.warning = warning;
    this.icon = icon;
    this.text = text;
}

function checkModel(data) {
    switch(data.type) {
        case "space": {
            return new HostModel(
                data.title,
                data.spaceUsed + '/' + data.spaceTotal + 'GB',
                "hostInfo__card__box--orange",
                "fa fa-file hostInfo__card__box__icon",
                true,
                "fa fa-exclamation-triangle hostInfo__card__footer__icon",
                data.text,
            );
        }
        case "revenue": {
            return new HostModel(
                data.title,
                '$' + data.revenue,
                "hostInfo__card__box--green",
                "fa fa-home hostInfo__card__box__icon",
                false,
                "fa fa-calendar hostInfo__card__footer__icon",
                data.text,
            );
        };
        case "bug": {
            return new HostModel(
                data.title,
                data.bug,
                "hostInfo__card__box--red",
                "fa fa-exclamation-circle hostInfo__card__box__icon",
                false,
                "fa fa-tag hostInfo__card__footer__icon",
                data.text,
            );
        };
        case "fixedBug": {
            return new HostModel(
                data.title,
                data.bug,
                "hostInfo__card__box--blue",
                "fab fa-twitter hostInfo__card__box__icon",
                false,
                "fa fa-clock hostInfo__card__footer__icon",
                data.text,
            )
        }
    }
}

function HostInfoViewModel() {
    var self = this;
    self.hostInfos = ko.observableArray([]);
    $.getJSON("/api/hostInfos", function(res) {
        var mappedHost = $.map(res, function(data) { return new checkModel(data) });
        console.log('mappedHost', mappedHost);
        self.hostInfos(mappedHost);
    });  
}

ko.applyBindings(new HostInfoViewModel());
