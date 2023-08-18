#include <stdio.h>

int main()
{

    int n;

    scanf("%d", &n);

    int a[n] = {};

    int b[n] = {};

    for (int i{}; i < n; i++)

        scanf("%d", &a[i]);

    for (int i{}; i < n; i++)

        scanf("%d", &b[i]);

    int q;

    scanf("%d", &q);

    while (q--)
    {

        int r1, c1, r2, c2;

        scanf("%d%d%d%d", &r1, &c1, &r2, &c2);

        int ans1 = a[r1 - 1] + b[c1 - 1];

        int ans2 = a[r2 - 1] + b[c2 - 1];

        if ((ans1 % 2 == 0 && ans2 % 2 == 0) || (ans1 % 2 != 0 && ans2 % 2 != 0))

            printf("YES\n");

        else

            printf("NO\n");
    }
}