#include <stdio.h>
#include <malloc.h>

typedef struct {
    int value;
} registry;

typedef struct {
    registry A[50];
    int length;
} list;

void initList(list* l) {
    l->length = 0;
}

void reset(list* l) {
    l->length = 0;
}

void printList(list* l) {
    int i;
    printf("Lista: [ ");
    for (i=0; i < l->length; i++) {
        printf("%i ", l->A[i].value);
    }
    printf("]\n");
}

int indexOf(list* l, int value) {
    int i = 0;
    while (i < l->length) {
        if (value == l->A[i].value) {
            return i;
        }
        i++;
    }
    return -1;
}

int insert(list* l, registry reg, int index) {
    if (index < 0 || index > l->length || l->length == 50) return 0;
    int currIndex = l->length;
    while (currIndex > index) {
        l->A[currIndex] = l->A[currIndex - 1];
        currIndex--;
    }
    l->A[index] = reg;
    l->length++;
    return 1;
}

int delete(list* l, int value) {
    int index = indexOf(l, value);
    if (index < 0 || index >= l->length) return 0;
    int currIndex = index;
    while (currIndex < l->length) {
        l->A[currIndex] = l->A[currIndex + 1];
        currIndex++;
    }
    l->length--;
    return 1;
}

int main() {
    list lista;
    registry reg;
    reg.value = 2;
    initList(&lista);
    insert(&lista, reg, 0);
    reg.value = 3;
    insert(&lista, reg, 1);
    reg.value = 4;
    insert(&lista, reg, 2);
    printList(&lista);
    delete(&lista, 3);
    printList(&lista);
    return 0;
}
