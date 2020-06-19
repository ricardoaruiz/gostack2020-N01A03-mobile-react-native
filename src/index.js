import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';

import api from './services/api';

const App = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(response => {
        console.log('response.data', response.data)
        setProjects(response.data)
      })
      .catch(error => {
        console.error('Erro ao listar os projetos', error);
      });
  }, []);  

  const handleAddProject = () => {
    api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Ricardo'
    })
    .then(response => {
      console.log('response', response)
      setProjects((projects) => [ ...projects, response.data ])
    })
    .catch(error => console.log('Erro ao criar um novo projeto', error));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.button.text}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  project: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default App;