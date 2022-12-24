/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(false)
    const [item, setItem] = useState(initialValue)
    const [taskName, setTaskName] = useState(null)

    const localStorageItem = localStorage.getItem(itemName);
    
    useEffect(() => {
      if (!localStorageItem) {
        setTaskName(itemName)
        localStorageItem.setItem(taskName, JSON.stringify(item));
      } else {
        setItem(JSON.parse(localStorageItem))
      }

      setLoading(false);
    }, [setItem, setTaskName])
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
      } catch (error) {
        setError(error)
      }
    }
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage};