const desc ={ 
    "President":"Mr. Vijay Golap has a very dynamic personality. Mr. Vijay is always Calm in any situation. With his vast experience Mr. Vijay always help our team to coordinate with throughout all projects",
    "Secretary":"Mr. Santaram Mane is the backbone of the organisation. Mr. Santaran has completed their post-graduation from a reputed organisation such as TISS. With his wealth of knowledge in construction.",
    "Project_Manager":"Baburao has a Management degree of Social Worker. From the start he has a desire to work for society. He has shifted to Mumbai from Satara and join our organisation. He has an experience of 1 years as a Counsellor at Civil Hospital, Satara. In our organisation he has a responsibility of Project Co-ordinator. He Supervise and manage our project at Panvel village.",
    "Marketing_and_Admin":"Kalpesh Mane has Management Degree in Marketing from Mumbai University and has a background of Developer. With his 3 years of corporate experience in social media marketing Kalpesh has decided to join SAVALI. He is best known for his expertise in Social Media Marketing and Content creation. He has the overall responsibility of updating content of websites and communicating with social media. He also looks after the operation of the organisation."
}
$(document).ready(function(){

    const elements = document.querySelectorAll('.info');
    
    for(var i=0;i<elements.length;i++){
        $(elements[i]).click(function(event){
            var key = event.target.dataset.par1;
            // console.log(desc[key]);
             $("#desc").text(desc[key]);
             let title = key.replaceAll("_", " ");
             $("#mtitle").text(title);
            $('#profileDesc').modal('show');

        })
    }

})