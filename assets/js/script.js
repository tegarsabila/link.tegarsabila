getData();

async function getData() {
  const response = await fetch('https://api.github.com/users/tegarsabila')
  const data = await response.json();
  const follower = data.followers;
  const following = data.following;
  const repos = data.public_repos;
  document.getElementById("follower").innerHTML = follower;
  document.getElementById("following").innerHTML = following;
  document.getElementById("repos").innerHTML = repos;
}