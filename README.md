Project-Feature-2
This repo contains artifacts to illustrate Angula JS development cycle, GitHub Page, and REST api to resquest and get data from github api.

Quick start

You can assess the 3 app by clinking in the links belows : 
</br>
</br>
[Landing page](https://patrickhub.github.io/Project-Feature-2/) 
</br>
[Angula app](https://arcane-hamlet-81712.herokuapp.com/) 
</br>
[Rest api](https://blooming-earth-98873.herokuapp.com/api/repos) to get repoitories list of wasadi who is one of the formers
contributors of GitHub Exployer. </br> You can also get the number of repositories that he has created per year since 2008 up to 2016 
[by clincking here](https://blooming-earth-98873.herokuapp.com/api/repos/total)




Odjectifs
	- Concevoir et symplifier une architecture repartie.
	- Analyser la problématique à un lieur de service.

Enoncé

Dans ce laboratoire il est question e réaliser un lieur redondant entre des clients et serveurs d'application. 
L'objectif de lieur étant d'associer un client à un service fourni par l'un des serveurs d'application disponible.

Comportement des clients
Le client doit obténir l'adresse et le port du service fournit par un serveur pour la toute prémière fois qu'il nécessite ce service.
Par la suite il pourra alors utiliser l'adresse obténu pour reclamer directement le service auprès du serveur.

Comportement des serveurs
Lors du demarrage, tout serveur s'inscrit auprès d'un lieur en lui transmettant son adresse IP, son port de service ainsi que le type du service rendu.

Pour tester le bon fonctionnement de l'application obténue, les tests suivantes doivent être réaliser avec succès.
	- Un lieur doit être obténu aléatoirement à partir d'une liste;
	- Un lieur ou un serveur doit être redemarré aussitôt qu'il est tombé en panne;
	- Après rédémarrage d'un lieur, il doit se mettre à jours par rapport aux autres lieurs disponibles;
	- Le client doit s'arrêter ou attendre un délai après qu'il redemande un service inconnu auprès d'un lieur;
	- Le lieur doit repondre uniquement aux service existants;
	- Un client doit notifier un lieu d'un service non disponible;
	- Après notification d'un client lieur doit mettre à jous sa table de service et la sychroniser avec les autres lieurs
	- Le lieur doit distribuer les services de même type de façon cyclique entre les serveurs;
	
	

# Laboratoire de programmation repartie PRR


## Objectifs

- Concevoir et symplifier une architecture repartie.
- Analyser la problématique à un lieur de service.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Enoncé

Dans ce laboratoire il est question e réaliser un lieur redondant entre des clients et serveurs d'application. 
L'objectif de lieur étant d'associer un client à un service fourni par l'un des serveurs d'application disponible.

```
Give examples
```

### Comportement des clients

Le client doit obténir l'adresse et le port du service fournit par un serveur pour la toute prémière fois qu'il nécessite ce service.
Par la suite il pourra alors utiliser l'adresse obténu pour reclamer directement le service auprès du serveur.

### Comportement des serveurs

Lors du demarrage, tout serveur s'inscrit auprès d'un lieur en lui transmettant son adresse IP, son port de service 
ainsi que le type du service rendu.


### Tests à effectuer

Pour tester le bon fonctionnement de l'application obténue, les tests suivantes doivent être réaliser avec succès.

* Un lieur doit être obténu aléatoirement à partir d'une liste;
* Un lieur ou un serveur doit être redemarré aussitôt qu'il est tombé en panne;
* Après rédémarrage d'un lieur, il doit se mettre à jours par rapport aux autres lieurs disponibles;
* Le client doit s'arrêter ou attendre un délai après qu'il redemande un service inconnu auprès d'un lieur;
* Le lieur doit repondre uniquement aux service existants;
* Un client doit notifier un lieu d'un service non disponible;
* Après notification d'un client lieur doit mettre à jous sa table de service et la sychroniser avec les autres lieurs
* Le lieur doit distribuer les services de même type de façon cyclique entre les serveurs;


