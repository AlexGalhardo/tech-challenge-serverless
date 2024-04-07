## Usefull CLI Commands

### See public ssh-key: 
```
cat /Users/alexgalhardo/.ssh/id_rsa.pub
```

### Delete directories recursively:
```
find . \( -name ".git" -o -name ".terraform" \) -type d -exec rm -rf {} +
```

### See all env variables:
```
printenv
```
