$('#searchBar').keyup(function() {
        _this = this;
        $.each($('tr td:first-child'), function() {
          console.log(this);
            if(this.innerText.toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
               $(this).parent().hide()
            else
				$(this).parent().show()
        });
});
