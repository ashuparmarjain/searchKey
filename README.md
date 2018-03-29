#Search key in an Array or an Object

JS function to search an array ( simple array / array of object)  for a key 

## How it works 

Lets say you are looking for a particular data in an array then all you have to do is call searchKey() and pass the key you want to search and  the array in which you want to search.

### Example

```
<script type="text/javascript">
	//import searchKey function then 

	// Let say we have a data of users

	var users = [{
			id:42,
			fname:'Ashutosh',
			lname:'Parmar'
			
		},{
			id:56,
			fname:'Tony',
			lname:'Lee'
		},{
			id:65,
			fname:'Dennis',
			lname:'Ritchie'
		}];


	var result =  searchKey({data:users,key:'Parmar'}); 
	//We have called searchKey function to search 'Parmar' in users array of object

	console.log(result);

	//output

	{
		status : true,
		numOfOccurance	:	1,
		atPosition		:	0,
		data 			:	{id: 42, fname: "Ashutosh", lname: "Parmar"}
	}

	If the key is not found it will return false.
</script>

```